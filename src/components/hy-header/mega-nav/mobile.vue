<style lang="sass">
    @import './mega-nav-mobile';
</style>

<template src="./mega-nav-mobile.html"></template>

<script>
import SearchBar from './search-bar/index.vue';
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
    currentRegion: {
      type: String,
      required: true
    },
    currentLang: {
      type: String,
      required: true
    },
    globalNav: {
      type: Object,
      required: true
    }
  },
  computed: {
    subNavTemplateType() {
      return this.getTemplateType(this.currentRegion.toLowerCase());
    }
  },
  methods: {
    getLinkHrefWithAnalyticTag(link) {
      return this.getLinkHrefWithAnalyticTagMixin(link, this.currentLang.toUpperCase());
    }
  },
  components: {
    SearchBar
  },
  ready() {
    console.log(this.globalNav);
    this.data.primaryNavLinks.sort((itemA, itemB) => itemA.mobileOrder > itemB.mobileOrder);
  }
};
</script>
