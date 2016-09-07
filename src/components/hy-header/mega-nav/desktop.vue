<style lang="sass">
    @import './mega-nav-desktop';
</style>

<template src="./mega-nav-desktop.html"></template>

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
    console.log(this.data.primaryNavLinks);
  }
};
</script>
