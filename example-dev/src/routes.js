export default {
  '/': {
    component: require('views/index.vue')
  },
  '/step-tracker': {
    component: {
      template: '<step-tracker-page></step-tracker-page>',
      components: {
        StepTrackerPage(resolve) {
          require(['views/step-tracker-page.vue'], resolve);
        }
      }
    }
  },
  '/tabs': {
    component: {
      template: '<tabs-page></tabs-page>',
      components: {
        TabsPage(resolve) {
          require(['views/tabs-page.vue'], resolve);
        }
      }
    }
  },
  '/legal': {
    component: {
      template: '<legal-page></legal-page>',
      components: {
        LegalPage(resolve) {
          require(['views/legal-page.vue'], resolve);
        }
      }
    }
  },
  '/overlay': {
    component: {
      template: '<overlay-page></overlay-page>',
      components: {
        OverlayPage(resolve) {
          require(['views/overlay-page.vue'], resolve);
        }
      }
    }
  }
};
