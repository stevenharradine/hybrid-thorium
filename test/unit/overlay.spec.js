import Vue from 'vue';
import OverlayContainer from '../../src/components/overlay/overlay-container.vue';
import Overlay from '../../src/components/overlay/overlay.vue';
import overlayOpener from '../../src/directives/overlay-opener';
import setFocus from '../../src/directives/set-focus';

describe('Overlay.vue', () => {
    let vm;
    beforeAll(() => {
        vm = new Vue({
            template: `<div>
                        <a id="btn1" v-overlay-opener="overlay-1">
                          Open overlay #1
                        </a>
                        <a id="btn2" v-overlay-opener="overlay-2">
                          Open overlay #1
                        </a>
                        <overlay-container>
                         <overlay overlay-key="overlay-1">
                           overlay 1
                         </overlay>
                         <overlay overlay-key="overlay-2">
                           overlay 2
                         </overlay>
                        </overlay-container>
                      </div>`,
            components: {
                OverlayContainer,
                Overlay
            },
            directives: {
                overlayOpener,
                setFocus
            }
        }).$mount();
    });

    it('render 2 overlays', () => {
        expect(vm.$el.querySelectorAll('article.c-overlay').length).toBe(2);
    });


    it('all overlays be hidden on init', () => {
        expect(vm.$el.querySelectorAll('article.c-overlay')[0].style.display).toEqual('none');
        expect(vm.$el.querySelectorAll('article.c-overlay')[1].style.display).toEqual('none');
    });

    it('click on overlay opener actives corresponding overlay', (done) => {
        vm.$el.querySelector('#btn1').click();
        Vue.nextTick(() => {
          expect(vm.$el.querySelectorAll('article.c-overlay')[0].style.display).not.toEqual('none');
          expect(vm.$el.querySelectorAll('article.c-overlay')[1].style.display).toEqual('none');
          done();
        });
    });
});
