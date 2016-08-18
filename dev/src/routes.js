import Index from './views/index.vue';
import StepTrackerPage from './views/step-tracker-page.vue';
import TabsPage from './views/tabs-page.vue';
import LegalPage from './views/legal-page.vue';
import OverlayPage from './views/overlay-page.vue';
import CollapsablePanelPage from './views/collapsable-panel-page.vue';
import AlertPage from './views/alert-page.vue';


export default {
  '/': {
    component: Index
  },
  '/alert': {
    component: {
      template: '<alert-page></alert-page>',
      components: { AlertPage }
    }
  },
  '/step-tracker': {
    component: {
      template: '<step-tracker-page></step-tracker-page>',
      components: { StepTrackerPage }
    }
  },
  '/tabs': {
    component: {
      template: '<tabs-page></tabs-page>',
      components: { TabsPage }
    }
  },
  '/legal': {
    component: {
      template: '<legal-page></legal-page>',
      components: { LegalPage }
    }
  },
  '/overlay': {
    component: {
      template: '<overlay-page></overlay-page>',
      components: { OverlayPage }
    }
  },
  '/collapsable-panel': {
    component: {
      template: '<collapsable-panel-page></collapsable-panel-page>',
      components: { CollapsablePanelPage }
    }
  }
};
