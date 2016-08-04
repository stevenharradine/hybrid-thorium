import Vue from 'vue';
import Tab from '../../src/components/tab/tab.vue';
import Tabs from '../../src/components/tab/tabs.vue';

describe('Tabs.vue', () => {
  let vm;

  it('should render into 2 tabs', () => {
    vm = new Vue({
      template: `<div>
                  <tabs>
                    <tab label="tab1">tab1 content</tab>
                    <tab label="tab2">tab2 content</tab>
                  </tabs>
                </div>`,
      components: {
        tabs: Tabs,
        tab: Tab
      }
    }).$mount();
    expect(vm.$el.querySelectorAll('li.c-tabs__header-item').length).toBe(2);
  });

  it('second tab should not be active', () => {
      expect(vm.$el.querySelectorAll('li.c-tabs__header-item')[1]
      .className).not.toContain('--active');
  });

  it('second tab should be active after click', (done) => {
    vm.$el.querySelectorAll('li.c-tabs__header-item')[1].children[0].click();
    Vue.nextTick(() => {
      expect(vm.$el.querySelectorAll('li.c-tabs__header-item')[1].className).toContain('--active');
      done();
    });
  });

  it('second tab content is correct', () => {
    expect(vm.$el.querySelectorAll('div.c-tabs__pane')[1].textContent).toContain('tab2 content');
  });
});
