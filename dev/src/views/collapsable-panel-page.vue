<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h4 hy_t-grey">Collapsable Panel</h2>
     <hr class="hy_u-space-mb-2">
     <div class="sg_c-demo hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">
         <div class="sg_c-demo__container">
           <collapsable-panel label="Panel 1" :is-open="true">
            Panel 1 content
           </collapsable-panel>

           <collapsable-panel label="Panel 2">
            Panel 2 content
           </collapsable-panel>
         </div>
         <collapsable-panel label="HTML">
           <pre>
             <code class="language-html">
               &lt;collapsable-panel label="Panel 1" :is-open="true"&gt;
                 Panel 1 content
               &lt;/collapsable-panel&gt;
               &lt;collapsable-panel label="Panel 2"&gt;
                 Panel 2 content
               &lt;/collapsable-panel&gt;
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
        name: 'label',
        type: 'String',
        isRequired: true,
        default: 'n/a',
        desc: 'The lable of the panel'
      }, {
        name: 'isOpen',
        type: 'Boolean',
        isRequired: false,
        default: false,
        desc: 'Is the panel open.'
      }]
    };
  }
};
</script>
