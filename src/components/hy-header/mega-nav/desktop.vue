<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './mega-nav-desktop';
</style>

<template src="./mega-nav-desktop.html"></template>

<script>
import SearchBar from '../search-bar/index.vue';

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
      let currentRegion = this.currentRegion.toLowerCase();
      if (['ab', 'bc'].includes(currentRegion)) {
        return 'sub-nav-template-type-1';
      } else if (
        ['mb', 'nb', 'nl', 'nt', 'ns', 'nu', 'on', 'pe', 'sk', 'yt'].includes(currentRegion)
      ) {
        return 'sub-nav-template-type-2';
      }
      return 'sub-nav-template-type-3';
    }
  },
  methods: {
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
  components: {
    SearchBar
  },
  ready() {
    console.log(this.data.primaryNavLinks);
  }
};
</script>
