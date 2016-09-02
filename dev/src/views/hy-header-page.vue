<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h4 hy_t-grey">Global Header</h2>
     <hr class="hy_u-space-mb-2">
     <div class="sg_c-demo hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">
         <div class="sg_c-demo__container">
           <hy-header :lang="lang" :region="region" :application="personal" :analytics="marketing"></hy-header>
           <hr>
            <div class="hy_o-layout">
              <div class="hy_o-layout__item hy_u-size-3of12">
                <fieldset class="hy_c-input">
                 <label class="hy_c-input__label">Language</label>
                 <select v-model="lang" class="hy_c-input__el hy_c-input__el--select" name="">
                   <option value="en">EN</option>
                   <option value="fr">FR</option>
                 </select>
                </fieldset>
              </div>
              <div class="hy_o-layout__item hy_u-size-3of12">
                <fieldset class="hy_c-input">
                 <label class="hy_c-input__label">Region</label>
                 <select v-model="region" class="hy_c-input__el hy_c-input__el--select" name="">
                   <option value="ab">AB</option>
                   <option value="bc">BC</option>
                   <option value="mb">MB</option>
                   <option value="bn">NB</option>
                   <option value="nl">NL</option>
                   <option value="ns">NS</option>
                   <option value="nu">NU</option>
                   <option value="on">ON</option>
                   <option value="pe">PE</option>
                   <option value="sk">SK</option>
                   <option value="yt">YT</option>
                   <option value="qc">QC</option>
                 </select>
               </fieldset>
              </div>
              <div class="hy_o-layout__item hy_u-size-3of12">
                <fieldset class="hy_c-input">
                 <label class="hy_c-input__label">Application</label>
                 <select v-model="application" class="hy_c-input__el hy_c-input__el--select" name="">
                   <option value="personal">Personal</option>
                   <option value="business">Business</option>
                   <option value="careers">Careers</option>
                 </select>
               </fieldset>
              </div>

              <div class="hy_o-layout__item hy_u-size-3of12">
                <fieldset class="hy_c-input">
                 <label class="hy_c-input__label">Analytics</label>
                 <select v-model="analytics" class="hy_c-input__el hy_c-input__el--select" name="">
                   <option value="marketing">Marketing</option>
                   <option value="myaccount">My Account</option>
                 </select>
               </fieldset>
              </div>
            </div>

         </div>
         <collapsable-panel label="HTML">
           <pre>
             <code class="language-html">
             </code>
           </pre>
         </collapsable-panel>
      </div>
   </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lang: 'en',
      region: 'bc',
      application: 'personal',
      analytics: 'marketing'
    };
  }
};
</script>
