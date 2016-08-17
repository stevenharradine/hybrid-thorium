<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h4 hy_t-grey">Tab</h2>
     <hr class="hy_u-space-mb-2">
     <div class="sg_c-demo hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">
         <div class="sg_c-demo__container">
           <tabs class="c-price-lookup hy_o-layout__item  hy_u-size-3of3@sm hy_u-size-3of4@md hy_u-size-4of12@lg">
             <tab label="Tab 1">
              <p>
                Tab 1 content
              </p>
             </tab>
             <tab label="Tab 2">
               <p>
                 Tab 2 content
               </p>
             </tab>
             <tab label="Tab 3" :is-disabled="true">
               <p>
                 Tab 3 content
               </p>
             </tab>
           </tabs>
         </div>
         <collapsable-panel label="HTML">
           <pre>
             <code class="language-html">
               &lt;tabs&gt;
                 &lt;tab label="Tab 1"&gt;
                   &lt;p&gt;
                     Tab 1 content
                   &lt;/p&gt;
                 &lt;/tab&gt;
                 &lt;tab label="Tab 2"&gt;
                   &lt;p&gt;
                     Tab 2 content
                   &lt;/p&gt;
                 &lt;/tab&gt;
                 &lt;tab label="Tab 3" :is-disabled="true"&gt;
                   &lt;p&gt;
                     Tab 3 content
                   &lt;/p&gt;
                 &lt;/tab&gt;
               &lt;/tabs&gt;
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
import ApiTable from '../components/api-table.vue';
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
        desc: 'The lable of the tab'
      }, {
        name: 'isDisabled',
        type: 'Boolean',
        isRequired: false,
        default: false,
        desc: 'Is the tab disabled or not. When set to true, the tab is not clickable.'
      }]
    };
  }
};
</script>
