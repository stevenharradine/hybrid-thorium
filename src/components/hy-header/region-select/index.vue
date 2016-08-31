<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './region-select';
</style>

<template src="./region-select.html"></template>

<script>
import { CHANGE_LOCALE_URL } from '../header-constants';
export default {
  props: {
    data: {
      type: Object,
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
  data() {
    return {
      isVisible: true
    };
  },
  methods: {
    getUpdateLangUrl(lang) {
      let currentUrl = this.computeCurrentLocationWithLanguage(lang);
      let url = `${CHANGE_LOCALE_URL}lang=${lang}&rd=${currentUrl}`;
      return url;
    },
    getUpdateRegionUrl(region) {
      let currentUrl = this.computeCurrentLocationWithRegion(region);
      let url = `${CHANGE_LOCALE_URL}region=${region}&rd=${currentUrl}`;
      return url;
    },
    computeCurrentLocationWithLanguage(lang) {
      return window.location.href.replace(
        /(.*)(\/)(en|fr)(\/)(ab|bc|mb|nb|nl|ns|nt|nu|on|pe|qc|sk|yt)(.*)/i,
        '$1$2' + lang + '$4$5$6'
      );
    },
    computeCurrentLocationWithRegion(region) {
      return window.location.href.replace(
        /(.*)(\/)(en|fr)(\/)(ab|bc|mb|nb|nl|ns|nt|nu|on|pe|qc|sk|yt)(.*)/i,
        '$1$2$3$4' + region + '$6'
      );
    }
  },
  watch: {
    'currentLang'(newVal, oldVal) {
      let url = this.getUpdateLangUrl(newVal);
      console.log('redirecting to ', url);
      // window.location.href = url;
    },
    'currentRegion'(newVal, oldVal) {
      let url = this.getUpdateRegionUrl(newVal);
      console.log('redirecting to ', url);
      // window.location.href = url;
    }
  },
  computed: {
    isLangSelectionAvailable() {
      return !['ab', 'bc'].includes(this.currentRegion.toLowerCase());
    }
  },
  events: {
    'regionSelect::toggle'() {
      this.isVisible = !this.isVisible;
    }
  },
  ready() {
  }
};
</script>
