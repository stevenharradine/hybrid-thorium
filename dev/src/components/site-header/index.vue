<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './site-header';
</style>

<template src="./site-header.html"></template>

<script>
export default {
  methods: {
    toggleNav() {
      this.$root.$broadcast('toggle::siteNav');
    }
  }
};
</script>
