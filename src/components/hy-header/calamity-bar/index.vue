<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './calamity-bar';
</style>

<template src="./calamity-bar.html"></template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  ready() {
  }
};
</script>
