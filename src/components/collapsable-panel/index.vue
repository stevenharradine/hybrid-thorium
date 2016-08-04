<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import '~telus-hydra/components/ui/icon';
    @import './collapsable-panel.scss';
</style>

<template src="./collapsable-panel.html"></template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleOpen($event) {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
