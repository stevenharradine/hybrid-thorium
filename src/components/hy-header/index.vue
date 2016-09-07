<style lang="sass">
    @import './hy-header.scss';
</style>

<template src="./hy-header.html"></template>

<script>
import CalamityBar from './calamity-bar/index.vue';
import NotificationBubble from './notification-bubble/index.vue';
import GlobalNav from './global-nav/index.vue';
import MegaNavDesktop from './mega-nav/desktop.vue';
import MegaNavMobile from './mega-nav/mobile.vue';
import RegionSelect from './region-select/index.vue';
import mixins from '../../mixins';

import ContentEn from 'json!./content-en.json';
import ContentFr from 'json!./content-fr.json';
import * as constants from './header-constants';

export default {
  mixins,
  components: {
    CalamityBar,
    NotificationBubble,
    GlobalNav,
    MegaNavDesktop,
    MegaNavMobile,
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
    },
    analytics: {
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
      return !!this.data.calamityBar.content;
    },
    showNotification() {
      return !this.getCookie(constants.REGION_DETECT_NOTIFICATION_COOKIE);
    },
    getNotificationBubbleContent() {
      let bubbleContent = this
                          .data
                          .notificationBubble.
                          content.
                          replace(
                            '${region}', this.region.toUpperCase()
                          );
      return {
        closeBtnTitle: this.data.notificationBubble.closeBtnTitle,
        content: bubbleContent
      };
    }
  },
  methods: {
    loadContent() {
      if (this.lang.toLowerCase() === 'en') {
        this.data = ContentEn;
      } else {
        this.data = ContentFr;
      }
      this.isContentLoaded = true;
    },
    setLocale() {
      let BrowserProfileCookie = this.getCookie(constants.BROWSER_PROFILE_COOKIE);
      if (!!BrowserProfileCookie) {
        let userProfile = JSON.parse(JSON.parse(BrowserProfileCookie));
        this.lang = userProfile.language || 'en';
        this.region = userProfile.region || 'bc';
      }
    }
  },
  ready() {
    this.setLocale();
    this.loadContent();
  }
};
</script>
