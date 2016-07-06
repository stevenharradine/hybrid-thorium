import overlayOpener from './directives/overlay-opener';
import setFocus from './directives/set-focus';
import StepTracker from './components/step-tracker/index.vue';
import OverlayContainer from './components/overlay/overlay-container.vue';
import Overlay from './components/overlay/overlay.vue';
import LegalCounter from './components/legal/legal-counter.vue';
import LegalContainer from './components/legal/legal-container.vue';
import Tabs from './components/tab/tabs.vue';
import Tab from './components/tab/tab.vue';

module.exports = {
  Directives: {
    overlayOpener,
    setFocus
  },
  Components: {
    StepTracker,
    OverlayContainer,
    Overlay,
    LegalCounter,
    LegalContainer,
    Tabs,
    Tab
  }
};
