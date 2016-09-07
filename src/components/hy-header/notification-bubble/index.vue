<style lang="sass">
    @import './notification-bubble';
</style>

<template src="./notification-bubble.html"></template>

<script>
import mixins from '../../../mixins';
import * as constants from '../header-constants';

export default {
  mixins,
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isVisible: true
    };
  },
  methods: {
    closeNotification() {
      this.isVisible = false;
      this.setCookie({
        key: constants.REGION_DETECT_NOTIFICATION_COOKIE,
        value: 1,
        path: '/',
        hoursExp: 24 * 7
      });
    }
  },
  ready() {
  }
};
</script>
