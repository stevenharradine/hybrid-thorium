<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h2 hy_t-grey">Legal System</h2>
     <hr class="hy_u-space-mb-2">
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
       Ut enim ad<legal-counter
         v-overlay-opener="legal-overlay"
         legal-key="fibre-promotions-ffg"
         legal-lang="en" legal-region="bc"
         ></legal-counter>  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <legal-counter
         v-overlay-opener="legal-overlay"
         legal-key="fibre-free-installation"
         legal-lang="en" legal-region="bc"
         ></legal-counter>fugiat nulla pariatur.
       Excepteur<legal-counter
         v-overlay-opener="legal-overlay"
         legal-key="fibre-promotions-ffg"
         legal-lang="en" legal-region="bc"
         ></legal-counter> sint occaecat cupidatat non proident,
       sunt in culpa qui officia deserunt mollit <legal-counter
         v-overlay-opener="legal-overlay"
         legal-key="fibre-telus-and-network-logos"
         legal-lang="en" legal-region="bc"
         ></legal-counter>anim id est laborum<legal-counter
           v-overlay-opener="legal-overlay"
           legal-key="fibre-promotions-phone"
           legal-lang="en" legal-region="bc"
           ></legal-counter>.
     </p>
   </div>
 </section>

 <overlay-container>
  <overlay overlay-key="legal-overlay">
    <h4 class="hy_c-headline hy_c-headline--h4" slot="overlay-header">Terms and conditions</h4>
    <article slot="overlay-body">
        <legal-container></legal-container>
    </article>
  </overlay>
</overlay-container>
</template>

<script>
export default {
};
</script>
