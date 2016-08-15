<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h3 hy_t-grey">Step Tracker</h2>
     <hr class="hy_u-space-mb-2">
     <h3 class="hy_c-headline hy_c-headline--h4 hy_t-grey">Example</h3>
     <div class="sg_c-demo hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">
         <div class="sg_c-demo__container">
           <step-tracker :current-step="stepTrackerCurrentStep" :config="stepTrackerConfig"></step-tracker>
         </div>
        <div class="sg_c-demo__snippet">
          <p>
            HTML
          </p>
          <pre>
            <code class="language-html">
&lt;step-tracker
  :current-step="stepTrackerCurrentStep"
  :config="stepTrackerConfig"&gt;
&lt;/step-tracker&gt;
            </code>
          </pre>
          </div>
          <div class="sg_c-demo__snippet">
          <p>
            javascript
          </p>
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
        </div>
      </div>
      <h3 class="hy_c-headline hy_c-headline--h4 hy_t-grey">API</h3>
      <div class="hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">

        <table class="sg_c-api-table">
          <tr>
            <th>
              Name
            </th>
            <th>
              Type
            </th>
            <th>
              Required
            </th>
            <th>
              Default
            </th>
            <th>
              Description
            </th>
          </tr>
          <tr>
            <td>
              currentStep
            </td>
            <td>
              Integer
            </td>
            <td>
              true
            </td>
            <td>
              0
            </td>
          </tr>

          <tr>
            <td>
              config
            </td>
            <td>
              Object
            </td>
            <td>
              true
            </td>
            <td>
              n/a
            </td>
          </tr>
        </table>
      </div>

   </div>
  </section>
</template>

<script>
export default {
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
      }
    };
  }
};
</script>
