<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h4 hy_t-grey">Overlay System</h2>
     <hr class="hy_u-space-mb-2">
     <div class="sg_c-demo hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">
         <div class="sg_c-demo__container">
           <p>
             <button v-overlay-opener="overlay-1" class="hy_c-button hy_c-button--link hy_t-purple" type="button" role="button">
               Open overlay #1 <i class="hy_c-icon hy_c-icon--arrow-right-circled hy_c-button__icon"></i>
             </button>
           </p>
           <p>
             <button v-overlay-opener="overlay-2" class="hy_c-button hy_c-button--link hy_t-purple" type="button" role="button">
               Open overlay #2 <i class="hy_c-icon hy_c-icon--arrow-right-circled hy_c-button__icon"></i>
             </button>
           </p>
           <overlay-container>
                  <overlay overlay-key="overlay-1">
                    <h4 class="hy_c-headline hy_c-headline--h4" slot="overlay-header">This is overlay #1</h4>
                    <article slot="overlay-body">
                        Overlay #1 body
                    </article>
                  </overlay>
                  <overlay overlay-key="overlay-2">
                    <h4 class="hy_c-headline hy_c-headline--h4" slot="overlay-header">This is overlay #2</h4>
                    <article slot="overlay-body">
                        Overlay #2 body
                    </article>
                  </overlay>
          </overlay-container>
         </div>
         <collapsable-panel label="HTML">
           <pre>
             <code class="language-html">
&lt;overlay-container&gt;
 &lt;overlay overlay-key="overlay-1"&gt;
   &lt;h4  class="hy_c-headline hy_c-headline--h4" slot="overlay-header"&gt;
   This is overlay #1
   &lt;/h4&gt;
   &lt;article slot="overlay-body"&gt;
     Overlay #1 body
   &lt;/article&gt;
 &lt;/overlay&gt;
 &lt;overlay overlay-key="overlay-2"&gt;
   &lt;h4  class="hy_c-headline hy_c-headline--h4" slot="overlay-header"&gt;
   This is overlay #1
   &lt;/h4&gt;
   &lt;article slot="overlay-body"&gt;
     Overlay #2 body
   &lt;/article&gt;
 &lt;/overlay&gt;
&lt;/overlay-container&gt;
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
  data() {
    return {
      apiItems: [{
        name: 'overlayKey',
        type: 'String',
        isRequired: true,
        default: 'n/a',
        desc: 'The key of the overlay. Used by the overlay opener directive to target the overley.'
      }]
    };
  }
};
</script>
