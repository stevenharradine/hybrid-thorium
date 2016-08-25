<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import '~telus-hydra/components/ui/icon';
    @import './api-table';
</style>

<template src="./api-table.html"></template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
};
</script>
