import Vue from 'vue';
import Spinner from '../../src/components/spinner/index.vue';

describe('Spinner.vue', () => {
    let vm;
    beforeAll(() => {
      vm = new Vue({
        template: `<div>
                  <spinner text="Loading...">
                  </spinner>
                  </div>`,
        components: {
          Spinner
        }
      }).$mount();
    });

    it('renders correctly', () => {
      expect(vm.$el.querySelector('.c-spinner').style.display).toBe('none');
      expect(vm.$el.querySelector('.c-spinner').textContent).toContain('Loading...');
    });

    it('displays the spinner after show::spinner event', () => {
      vm.$broadcast('show::spinner');
      vm.$nextTick(() => {
        expect(vm.$el.querySelector('.c-spinner').style.display).not.toBe('none');
      });
    });
});
