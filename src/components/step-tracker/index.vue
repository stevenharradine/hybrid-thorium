<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import '~telus-hydra/components/ui/icon';
    @import './step-tracker.scss';
</style>

<template src="./step-tracker.html"></template>

<script>
export default {
  props: {
    config: {
      type: Object
    },
    currentStep: {
      type: Number,
      default: 0
    },
  },
  methods: {
    clickHandler($event, step, index) {
      if (!!step.onClickHandler) {
        $event.preventDefault();
        if (this.currentStep > index) {
          step.onClickHandler();
        }
      }
    }
  }
};
</script>
