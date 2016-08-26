import Vue from 'Vue';
import VueRouter from 'vue-router';
import routes from './routes';
import HybridThorium from 'hybrid-thorium';
import Prism from 'prismjs';
import SideNav from './components/side-nav/index.vue';
import SiteHeader from './components/site-header/index.vue';
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(HybridThorium);

let router = new VueRouter();
let App = Vue.extend({
  components: {
    SideNav,
    SiteHeader
  },
  data() {
    return {
      ligerEndPoint: 'https://api.cms.telus.com/legals',
      ligerApplicationKey: 'b9738d67b89dfc782746d4a9cf4a1093'
    };
  }
});
router.map(routes);
router.afterEach(() => {
  setTimeout(() => {
    Prism.highlightAll();
  }, 0);
});
router.redirect({
  '*': '/get-started'
});
router.start(App, '#app-main');

// router.go('/get-started');
