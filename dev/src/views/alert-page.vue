<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h4 hy_t-grey">Alert</h2>
     <hr class="hy_u-space-mb-2">
     <div class="sg_c-demo hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">
         <div class="sg_c-demo__container">
           <alert type="error">This is an error alert.</alert>
           <alert type="info">This is an info alert.</alert>
           <alert type="success">This is a success alert.</alert>
           <alert type="success" :dismissible="false">This is not a dismissible alert.</alert>
           <alert type="success" :on-closed="dismissCallBack">This is an alert with callback.</alert>
           <alert type="info" :timeout="5000">This alert should timeout in 5 seconds.</alert>
         </div>
         <collapsable-panel label="HTML">
           <pre>
             <code class="language-html">
&lt;alert type="error"&gt;This is an error alert.&lt;/alert&gt;
&lt;alert type="info"&gt;This is an info alert.&lt;/alert&gt;
&lt;alert type="success"&gt;This is a success alert.&lt;/alert&gt;
&lt;alert type="success" :dismissible="false"&gt;This is not a dismissible alert.&lt;/alert&gt;
&lt;alert type="success" :on-closed="dismissCallBack"&gt;This is an alert with callback.&lt;/alert&gt;
&lt;alert type="success" :timeout="5000"&gt;This alert should timeout in 5 seconds.&lt;/alert&gt;
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
      dismissCallBack() {
        console.log('alert!!!');
      },
      apiItems: [{
        name: 'type',
        type: 'String',
        isRequired: true,
        default: 'n/a',
        desc: 'The type of alert (error, info, success)'
      }, {
        name: 'dismissible',
        type: 'Boolean',
        isRequired: false,
        default: true,
        desc: 'Is the alert dismissible?'
      }, {
        name: 'timeout',
        type: 'Number',
        isRequired: false,
        default: -1,
        desc: 'The duration alert stays on screen in ms'
      }, {
        name: 'onClosed',
        type: 'Function',
        isRequired: false,
        default: 'n/a',
        desc: 'Callback function to be called when alert is closed.'
      }]
    };
  }
};
</script>
