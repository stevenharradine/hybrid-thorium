import overlayOpener from './directives/overlay-opener';
import setFocus from './directives/set-focus';
import StepTracker from './components/step-tracker/index.vue';
import OverlayContainer from './components/overlay/overlay-container.vue';
import Overlay from './components/overlay/overlay.vue';
import LegalCounter from './components/legal/legal-counter.vue';
import LegalContainer from './components/legal/legal-container.vue';
import Tabs from './components/tab/tabs.vue';
import Tab from './components/tab/tab.vue';
import CollapsablePanel from './components/collapsable-panel/index.vue';
import Alert from './components/alert/index.vue';
import Spinner from './components/spinner/index.vue';
import HyHeader from './components/hy-header/index.vue';

let components = {
  StepTracker,
  OverlayContainer,
  Overlay,
  LegalCounter,
  LegalContainer,
  Tabs,
  Tab,
  CollapsablePanel,
  Alert,
  Spinner,
  HyHeader
};
let directives = {
  overlayOpener,
  setFocus
};

module.exports = function install(Vue) {
  for (let name in components) {
    Vue.component(name, components[name]);
  }
  for (let name in directives) {
    Vue.directive(name, directives[name]);
  }
};
