export default {
  methods: {
    getTemplateType(currentRegion) {
      if (['ab', 'bc'].includes(currentRegion)) {
        return 'sub-nav-template-type-1';
      } else if (
        ['mb', 'nb', 'nl', 'nt', 'ns', 'nu', 'on', 'pe', 'sk', 'yt'].includes(currentRegion)
      ) {
        return 'sub-nav-template-type-2';
      }
      return 'sub-nav-template-type-3';
    },
    getAyalyticTag(link) {
      if (
        typeof link.analyticsTags !== 'undefined' &&
        typeof link.analyticsTags[this.analytics] !== 'undefined'
      ) {
        return link.analyticsTags[this.analytics];
      }
      return '';
    },
    getLinkHrefWithAnalyticTagMixin(link, currentLang) {
      let tag = `${this.getAyalyticTag(link)}__${currentLang}`;
      return `${link.href}?INTCMP=${tag}`;
    }
  }
};
