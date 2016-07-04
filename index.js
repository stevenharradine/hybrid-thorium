import overlayOpener from './src/directives/overlay-opener';
import setFocus from './src/directives/set-focus';
import StepTracker from './src/components/step-tracker/index.vue';
import OverlayContainer from './src/components/overlay/overlay-container.vue';
import Overlay from './src/components/overlay/overlay.vue';
import LegalCounter from './src/components/legal/legal-counter.vue';
import LegalContainer from './src/components/legal/legal-container.vue';
import Tabs from './src/components/tab/tabs.vue';
import Tab from './src/components/tab/tab.vue';

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
