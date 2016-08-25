<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h4 hy_t-grey">Step Tracker</h2>
     <hr class="hy_u-space-mb-2">
     <div class="sg_c-demo hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">
         <div class="sg_c-demo__container">
           <step-tracker :current-step="stepTrackerCurrentStep" :config="stepTrackerConfig"></step-tracker>
         </div>
         <collapsable-panel label="HTML">
       <pre>
         <code class="language-html">
          &lt;step-tracker
          :current-step="stepTrackerCurrentStep"
          :config="stepTrackerConfig"&gt;
          &lt;/step-tracker&gt;
         </code>
       </pre>
         </collapsable-panel>
         <collapsable-panel label="javascript">
           <pre>
             <code class="language-js">
              let stepTrackerCurrentStep = 2;
              let stepTrackerConfig = {
                isClickable: true,
                steps: [
                  {
                    title: 'Step A',
                    link: '',
                    onClickHandler: (event) => {
                      this.stepTrackerCurrentStep = 0;
                    }
                  }, {
                    title: 'Step B',
                    link: '',
                    onClickHandler: (event) => {
                      this.stepTrackerCurrentStep = 1;
                    }
                  }, {
                    title: 'Step C',
                    link: '',
                    onClickHandler: (event) => {
                      this.stepTrackerCurrentStep = 2;
                    }
                  }
                ]
              };
              let vm = new Vue({
                el: 'body',
                data: {
                  stepTrackerConfig,
                  stepTrackerCurrentStep
              },
                components: {
                  StepTracker
                }
              });
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
      stepTrackerCurrentStep: 2,
      stepTrackerConfig: {
        isClickable: true,
        steps: [
          {
            title: 'Step A',
            link: '',
            onClickHandler: (event) => {
              this.stepTrackerCurrentStep = 0;
            }
          },
          {
            title: 'Step B',
            link: '',
            onClickHandler: (event) => {
              this.stepTrackerCurrentStep = 1;
            }
          },
          {
            title: 'Step C',
            link: '',
            onClickHandler: (event) => {
              this.stepTrackerCurrentStep = 2;
            }
          }
        ]
      },
      apiItems: [{
        name: 'currentStep',
        type: 'Integer',
        isRequired: true,
        default: 0,
        desc: 'todo'
      }, {
        name: 'config',
        type: 'Object',
        isRequired: true,
        default: 'n/a',
        desc: 'todo'
      }, {
        name: 'config.title',
        type: 'String',
        isRequired: true,
        default: 'n/a',
        desc: 'The title of the step'
      }, {
        name: 'config.link',
        type: 'String',
        isRequired: false,
        default: 'n/a',
        desc: 'The link of the step. '
      }, {
        name: 'config.onClickHandler',
        type: 'Function',
        isRequired: false,
        default: 'n/a',
        desc: 'The callback function when step is clicked.'
      }]
    };
  }
};
</script>
