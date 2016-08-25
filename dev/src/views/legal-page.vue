<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h4 hy_t-grey">Legal System</h2>
     <hr class="hy_u-space-mb-2">
     <div class="sg_c-demo hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">
         <div class="sg_c-demo__container">
           <p class="hy_c-copy hy_c-copy--body hy_t-grey">
             Lorem ipsum<legal-counter
               v-overlay-opener="legal-overlay"
               legal-key="hs-referral-terms"
               legal-lang="en" legal-region="bc"
               ></legal-counter> dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             <legal-counter
               v-overlay-opener="legal-overlay"
               legal-key="1-year-offer-stim"
               legal-lang="en" legal-region="bc"
               ></legal-counter>
             </p>
         </div>
          <div class="sg_c-demo__container">
            <legal-container></legal-container>
         </div>
         <collapsable-panel label="HTML">
           <pre>
             <code class="language-html">
               &lt;legal-counter&gt;
                  legal-key="hs-referral-terms"
                  legal-lang="en"
                  legal-region="bc"
               &lt;/legal-counter&gt;
               &lt;legal-container&gt;&lt;/legal-container&gt;
             </code>
           </pre>
         </collapsable-panel>
         <collapsable-panel label="javascript">
           <pre>
             <code class="language-javascript">
               let vm = new Vue({
                 el: 'body',
                 data() {
                   return {
                     ligerEndPoint: 'https://api.cms.telus.com/legals',
                     ligerApplicationKey: 'b9738d67b89dfc782746d4a9cf4a1093'
                   };
                 },
                 components: {
                   LegalCounter,
                   LegalContainer
                 }
               });
             </code>
           </pre>
         </collapsable-panel>
      </div>
      <h3 class="hy_c-headline hy_c-headline--h5 hy_t-grey">API: Legal Counter</h3>
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
        name: 'legalKey',
        type: 'String',
        isRequired: true,
        default: 'n/a',
        desc: 'the key of legal in cms'
      }, {
        name: 'legalLang',
        type: 'String',
        isRequired: true,
        default: 'n/a',
        desc: 'the language of legal in cms'
      }, {
        name: 'legalRegion',
        type: 'String',
        isRequired: true,
        default: 'n/a',
        desc: 'the region of legal in cms'
      }]
    };
  }
};
</script>
