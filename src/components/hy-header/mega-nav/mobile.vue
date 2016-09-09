<style lang="sass">
    @import './mega-nav-mobile';
</style>

<template src="./mega-nav-mobile.html"></template>

<script>
import SearchBar from './search-bar/index.vue';
import commonMixin from '../common-mixin';
export default {
  mixins: [commonMixin],
  data() {
    return {
      isMegaVisible: false
    };
  },
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
    toggleSubNav(nav) {
      nav.isSubNavVisible = !nav.isSubNavVisible;
    },
    toggleMegaNav() {
      this.isMegaVisible = !this.isMegaVisible;
    },
    getLinkHrefWithAnalyticTag(link) {
      return this.getLinkHrefWithAnalyticTagMixin(link, this.currentLang.toUpperCase());
    }
  },
  components: {
    SearchBar
  },
  created() {
    this.data.primaryNavLinks.sort((itemA, itemB) => itemA.mobileOrder > itemB.mobileOrder);
    this.data.primaryNavLinks.forEach((link, index) => {
      if (!!link.hasSecondaryNav) {
        for (let key in link.secondaryNavLinks) {
          link.secondaryNavLinks[key] = Object.assign(
            {}, link.secondaryNavLinks[key], { isSubNavVisible: false }
          );
        }
      }
    });
  }
};
</script>
