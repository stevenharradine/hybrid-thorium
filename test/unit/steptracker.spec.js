import Vue from 'vue';
import StepTracker from '../../src/components/step-tracker/index.vue';

describe('StepTracker.vue', () => {
    let vm;
    let stepTrackerCurrentStep = 2;
    let config = {
      isClickable: true,
      steps: [
        {
          title: 'Step A',
          link: '',
          onClickHandler: () => {
            vm.$set('stepTrackerCurrentStep', 0);
          }
        },
        {
          title: 'Step B',
          link: ''
        },
        {
          title: 'Step C',
          link: ''
        }
      ]
    };

    beforeAll(() => {
      vm = new Vue({
          template: `<div><step-tracker
                      :current-step="stepTrackerCurrentStep"
                      :config="config"
                      ></step-tracker></div>`,
          components: {
              StepTracker
          },
          data() {
            return {
              stepTrackerCurrentStep,
              config
            };
          }
      }).$mount();
    });

    it('render 3 steps', () => {
      expect(vm.$el.querySelectorAll('li.c-step-tracker__step').length).toBe(3);
    });

    it('steps contains right text', () => {
      let steps = vm.$el.querySelectorAll('li.c-step-tracker__step');
      expect(steps[0].textContent).toContain('Step A');
      expect(steps[1].textContent).toContain('Step B');
      expect(steps[2].textContent).toContain('Step C');
    });

    it('click on step triggers callback', (done) => {
      let steps = vm.$el.querySelectorAll('li.c-step-tracker__step');
      expect(steps[2].className).toContain('--active');
      steps[0].children[0].click();
      Vue.nextTick(() => {
        expect(vm.$el.querySelectorAll('li.c-step-tracker__step')[0].className).toContain('--active');
        done();
      });
    });
});
