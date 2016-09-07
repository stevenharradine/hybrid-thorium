<style lang="sass">
    @import './global-nav';
</style>

<template src="./global-nav.html"></template>

<script>
import commonMixin from '../common-mixin';
export default {
  mixins: [commonMixin],
  props: {
    data: {
      type: Object,
      required: true
    },
    application: {
      type: String,
      required: true
    },
    analytics: {
      type: String,
      required: true
    },
    currentLang: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleSubNav(link) {
      link.isSubNavVisible = !link.isSubNavVisible;
    },
    getLinkHrefWithAnalyticTag(link) {
      return this.getLinkHrefWithAnalyticTagMixin(link, this.currentLang.toUpperCase());
    }
  },
  ready() {
    console.log('data', this.data);
    console.log('app', this.application);
    console.log('analytics', this.analytics);
    // Hide all the sub navs (even there is only one)
    this.data.links.forEach((link, index) => {
      if (!!link.hasSubNav) {
        let obj = Object.assign({}, link);
        obj.isSubNavVisible = false;
        this.data.links.$set(index, obj);
      }
    });
  }
};
</script>
