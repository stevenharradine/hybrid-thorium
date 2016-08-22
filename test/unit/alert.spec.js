import Vue from 'vue';
import Alert from '../../src/components/alert/index.vue';

describe('Alert.vue', () => {
  let vm;
  beforeAll(() => {
    vm = new Vue({
      template: `<div >
                  <alert type="error" v-ref:alert>This is an error alert</alert>
                </div>`,
      components: {
        Alert
      }
    }).$mount();
  });

  it('should render into error alert with correct text content', () => {
    expect(vm.$el.querySelector('.c-alert--error').textContent).toContain('This is an error alert');
  });

  it('should be dismissed after click on close btn', () => {
    vm.$el.querySelector('.c-alert__close-button').click();
    Vue.nextTick(() => {
      expect(vm.$refs.alert.$data.isVisible).toBe(false);
    });
  });
});
