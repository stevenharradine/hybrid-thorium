<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h4 hy_t-grey">Legal + Overlay</h2>
     <hr class="hy_u-space-mb-2">
     <div class="sg_c-demo hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">
         <div class="sg_c-demo__container">
           <p class="hy_c-copy hy_c-copy--body hy_t-grey">
             Lorem<legal-counter
               v-overlay-opener="legal-overlay"
               legal-key="combo-offers"
               legal-lang="en" legal-region="bc"
               ></legal-counter>
              ipsum<legal-counter
               v-overlay-opener="legal-overlay"
               legal-key="hs-referral-terms"
               legal-lang="en" legal-region="bc"
               ></legal-counter> dolor sit amet, consectetur
               <legal-counter apps-requirement
                 v-overlay-opener="legal-overlay"
                 legal-key="apps-requirement"
                 legal-lang="en" legal-region="bc"
                 ></legal-counter>adipiscing elit,
             sed do eiusmod tempor <legal-counter
               v-overlay-opener="legal-overlay"
               legal-key="1-year-offer-stim"
               legal-lang="en" legal-region="bc"
               ></legal-counter>incididunt ut labore et dolore magna aliqua.
             <legal-counter
               v-overlay-opener="legal-overlay"
               legal-key="combo-offers"
               legal-lang="en" legal-region="bc"
               ></legal-counter>
             </p>
             <overlay-container>
              <overlay overlay-key="legal-overlay">
                <h4 class="hy_c-headline hy_c-headline--h4" slot="overlay-header">Term and conditions</h4>
                <article slot="overlay-body">
                  <legal-container></legal-container>
                </article>
              </overlay>
            </overlay-container>
         </div>
         <collapsable-panel label="HTML">
           <pre>
             <code class="language-html">
&lt;p&gt;
 Lorem&lt;legal-counter
   v-overlay-opener="legal-overlay"
   legal-key="combo-offers"
   legal-lang="en" legal-region="bc"
   &gt;&lt;/legal-counter&gt;
  ipsum&lt;legal-counter
   v-overlay-opener="legal-overlay"
   legal-key="hs-referral-terms"
   legal-lang="en" legal-region="bc"
   &gt;&lt;/legal-counter&gt; dolor sit amet, consectetur
   &lt;legal-counter apps-requirement
     v-overlay-opener="legal-overlay"
     legal-key="apps-requirement"
     legal-lang="en" legal-region="bc"
     &gt;&lt;/legal-counter&gt;adipiscing elit,
 sed do eiusmod tempor &lt;legal-counter
   v-overlay-opener="legal-overlay"
   legal-key="1-year-offer-stim"
   legal-lang="en" legal-region="bc"
   &gt;&lt;/legal-counter&gt;incididunt ut labore et dolore magna aliqua.
 &lt;legal-counter
   v-overlay-opener="legal-overlay"
   legal-key="combo-offers"
   legal-lang="en" legal-region="bc"
   &gt;&lt;/legal-counter&gt;
 &lt;/p&gt;
 
 &lt;overlay-container&gt;
  &lt;overlay overlay-key="legal-overlay"&gt;
    &lt;h4 class="hy_c-headline hy_c-headline--h4" slot="overlay-header"&gt;Term and conditions&lt;/h4&gt;
    &lt;article slot="overlay-body"&gt;
      &lt;legal-container&gt;&lt;/legal-container&gt;
    &lt;/article&gt;
  &lt;/overlay&gt;
&lt;/overlay-container&gt;
             </code>
           </pre>
         </collapsable-panel>
      </div>
   </div>
  </section>
</template>
