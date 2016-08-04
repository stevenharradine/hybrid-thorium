import Vue from 'vue';
import CollapsablePanel from '../../src/components/collapsable-panel/index.vue';


describe('CollapsablePanel.vue', () => {
    let vm;
    beforeAll(() => {
        vm = new Vue({
            template: `<div>
                        <collapsable-panel label="This is title" :is-open="true">
                          this is content
                        </collapsable-panel>
                      </div>`,
            components: {
                CollapsablePanel
            }
        }).$mount();
    });

    it('render correctly', () => {
        expect(vm.$el.querySelector('.c-collapsable-panel__body').textContent).toContain('this is content');
        expect(vm.$el.querySelector('.c-collapsable-panel__header').textContent).toContain('This is title');
    });

    it('is-open flag adds class --open', () => {
        expect(vm.$el.querySelector('.c-collapsable-panel__header').className).toContain('--open');
        expect(vm.$el.querySelector('.c-collapsable-panel__body').className).toContain('--open');
    });

    it('click on header toggles --open class', (done) => {
        vm.$el.querySelector('.c-collapsable-panel__header').click();
        Vue.nextTick(() => {
            expect(vm.$el.querySelector('.c-collapsable-panel__header').className).not.toContain('--open');
            expect(vm.$el.querySelector('.c-collapsable-panel__body').className).not.toContain('--open');
            done();
        });
    });
});
