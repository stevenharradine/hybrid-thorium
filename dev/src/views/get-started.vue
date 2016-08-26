<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h4 hy_t-grey">Getting Started</h2>
     <hr class="hy_u-space-mb-2">
     <div class="hy_o-layout hy_o-layout--flushed">
     <h3 class="hy_c-headline hy_c-headline--h4 hy_t-grey hy_u-space-mb-1">Installation</h3>
     <h4 class="hy_c-headline hy_c-headline--h5 hy_t-grey hy_u-space-mb-1">NPM</h4>
     <pre>
       <code class="language-bash">
npm install hybrid-thorium
       </code>
     </pre>
     <h4 class="hy_c-headline hy_c-headline--h5 hy_t-grey hy_u-space-mb-1">Usage</h4>
     <p class="hy_c-copy hy_c-copy--body hy_t-grey">
       Use as a plugin (registers all components globally):
     </p>
     <pre>
       <code class="language-javascript">
import Vue from 'vue';
import HybridThorium from 'hybrid-thorium';

Vue.use(HybridThorium);

new Vue({
  el: '#app'
});
       </code>
     </pre>
     <p class="hy_c-copy hy_c-copy--body hy_t-grey">
       Use individual components:
     </p>
     <pre>
       <code class="language-javascript">
import Vue from 'vue';
import { Alert, StepTracker } from 'hybrid-thorium';

new Vue({
  el: '#app',
  components: {
    Alert,
    StepTracker
  }
});
       </code>
     </pre>

    <h4 class="hy_c-headline hy_c-headline--h5 hy_t-grey hy_u-space-mb-1">CDN (script tag)</h4>
    <p class="hy_c-copy hy_c-copy--body hy_t-grey">
      The hybrid-thorium.js file in the CDN contains all the components exposed on a global window.HybridThorium object.
    </p>
    <p class="hy_c-copy hy_c-copy--body hy_t-grey">
      First, include the JS and CSS files in your page:
    </p>
    <pre>
      <code class="language-html">
&lt;html&gt;
&lt;head&gt;
  &lt;link rel="stylesheet" href="https://cdn.telus.digital/ui/hydra/0.6.4/base.css" charset="utf-8"&gt;
  &lt;link rel="stylesheet" href="path/to/cdn/hybrid-thorium.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- Example usage of alert --&gt;
  &lt;alert type="error"&gt;This is an error alert.&lt;/alert&gt;
  &lt;script src="path/to/vue.js"&gt;&lt;/script&gt;
  &lt;script src="path/to/cdn/hybrid-thorium.js"&gt;&lt;/script&gt;
  &lt;script src="path/to/app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
      </code>
    </pre>
    <p class="hy_c-copy hy_c-copy--body hy_t-grey">
      Then, register the components globally for use in your templates:
    </p>
    <pre>
      <code class="language-javascript">
//app.js

Vue.use(HybridThorium);

new Vue({
 el: '#app'
});
      </code>
    </pre>
   </div>
  </section>
</template>

<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import '../scss/main.scss';
    @import '../scss/prism.scss';
</style>
<script>
export default {
};
</script>
