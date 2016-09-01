<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './full-screen-toggler';
</style>

<template src="./full-screen-toggler.html"></template>

<script>
export default {
  methods: {
    toggleFullScreen() {
      this.$dispatch('fullScreen::toggle');
    }
  }
};
</script>
