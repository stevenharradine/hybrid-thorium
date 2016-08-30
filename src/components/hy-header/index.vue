<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './hy-header.scss';
</style>

<template src="./hy-header.html"></template>

<script>
import CalamityBar from './calamity-bar/index.vue';
import NotificationBubble from './notification-bubble/index.vue';
import GlobalNav from './global-nav/index.vue';
import MegaNavDesktop from './mega-nav/desktop.vue';
import MegaNavMobile from './mega-nav/mobile.vue';
import SearchBar from './search-bar/index.vue';
import RegionSelect from './region-select/index.vue';
import mixins from '../../mixins';

import ContentEn from 'json!./content-en.json';


export default {
  mixins,
  components: {
    CalamityBar,
    NotificationBubble,
    GlobalNav,
    MegaNavDesktop,
    MegaNavMobile,
    SearchBar,
    RegionSelect
  },
  props: {
    lang: {
      type: String,
      required: true
    },
    region: {
      type: String,
      required: true
    },
    application: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isContentLoaded: false,
      data: null
    };
  },
  computed: {
    showCalamity() {
      return !!this.data.calamity.content;
    },
    showNotification() {
    }
  },
  methods: {
    loadContent() {
      if (this.lang.toLowerCase() === 'en') {
        this.data = ContentEn;
      }
    }
  },
  ready() {
    this.loadContent();
    this.isContentLoaded = true;
    // console.log(this.content);
  }
};
</script>
