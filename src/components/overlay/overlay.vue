<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './overlay.scss';
</style>

<template src="./overlay.html"></template>

<script>
/*
 * Ex: <overlay overlay-key="(String) key">
 *        Any content
 *      </overlay>
*/
export default {
  data() {
    return {
      isVisible: false
    };
  },
  props: {
    overlayKey: {
      type: String
    }
  },
  methods: {
    closeOverlay() {
        this.$dispatch('overlayContainer::close');
    }
  },
  events: {
    'overlay::open'(overlayKey) {
      if (overlayKey === this.overlayKey) {
        this.isVisible = true;
        return;
      }
      this.isVisible = false;
    }
  }
};
</script>
