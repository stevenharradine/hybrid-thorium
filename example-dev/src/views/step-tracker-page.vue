<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h2 hy_t-grey">Step Tracker</h2>
     <hr class="hy_u-space-mb-2">
     <step-tracker :current-step="stepTrackerCurrentStep" :config="stepTrackerConfig"></step-tracker>
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
          },
          {
            title: 'Step D',
            link: '',
            onClickHandler: (event) => {
              this.stepTrackerCurrentStep = 3;
            }
          }
        ]
      }
    };
  }
};
</script>
