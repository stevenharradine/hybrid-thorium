<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h4 hy_t-grey">Spinner</h2>
     <hr class="hy_u-space-mb-2">
     <div class="sg_c-demo hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">
         <div class="sg_c-demo__container">
           <label class="hy_c-control hy_c-control--checkbox" >
            <span class="hy_c-control__label-text">Full Screen</span>
            <input type="checkbox"  v-model="isFullScreen" />
            <div class="hy_c-control__indicator"></div>
          </label>

          <button @click="showSpinner" class="hy_c-button hy_c-button--raised hy_t-green" type="button">
            Show Spinner
          </button>



           <spinner :full-screen="isFullScreen" :text="msg"></spinner>
         </div>
         <collapsable-panel label="HTML">
           <pre>
             <code class="language-html">
               &lt;spinner text="I will close in 3 seconds" :full-screen="true"&gt;&lt;/spinner&gt;
             </code>
           </pre>
         </collapsable-panel>
      </div>
      <h3 class="hy_c-headline hy_c-headline--h5 hy_t-grey">API</h3>
      <div class="hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">
        <api-table :items="apiItems"></api-table>
      </div>

   </div>
  </section>
</template>

<script>
import ApiTable from '../components/api-table/index.vue';
export default {
  components: {
    ApiTable
  },
  methods: {
    showSpinner() {
      this._resetMsg();
      this.$root.$broadcast('show::spinner');
      setTimeout(() => {
        this.$root.$broadcast('hide::spinner');
      }, 3000);
    },
    _resetMsg() {
      let counter = 3;
      let interval = setInterval(() => {
        if (counter > 0) {
          counter --;
          this.msg = `I will close in ${counter} seconds`;
        } else {
          clearInterval(interval);
        }
      }, 1000);
      this.msg = `I will close in ${counter} seconds`;
    }
  },
  data() {
    return {
      msg: '',
      isFullScreen: false,
      apiItems: [{
        name: 'fullScreen',
        type: 'Boolean',
        isRequired: false,
        default: false,
        desc: 'Should the spinner take full screen'
      }, {
        name: 'text',
        type: 'String',
        isRequired: false,
        default: '\'\'',
        desc: 'The text of the spinner. Default empty'
      }, {
        name: 'show::spinner',
        type: 'Event',
        isRequired: false,
        default: 'n/a',
        desc: 'Active the spinner'
      }, {
        name: 'hide::spinner',
        type: 'Event',
        isRequired: false,
        default: 'n/a',
        desc: 'Hide the spinner'
      }]
    };
  }
};
</script>
