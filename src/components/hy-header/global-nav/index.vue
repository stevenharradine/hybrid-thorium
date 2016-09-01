<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './global-nav';
</style>

<template src="./global-nav.html"></template>

<script>
export default {
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
      let tag = `${this.getAyalyticTag(link)}__${this.currentLang.toUpperCase()}`;
      return `${link.href}?INTCMP=${tag}`;
    },
    getAyalyticTag(link) {
      if (
        typeof link.analyticsTags !== 'undefined' &&
        typeof link.analyticsTags[this.analytics] !== 'undefined'
      ) {
        return link.analyticsTags[this.analytics];
      }
      return '';
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
