<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import '~telus-hydra/components/ui/icon';
    @import '../../transitions/fade.scss';
    @import './alert.scss';
</style>

<template src="./alert.html"></template>

<script>
export default {
  data() {
    return {
      isVisible: true
    };
  },
  props: {
    type: {
      type: String,
      required: true
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    timeout: {
      type: Number,
      default: -1
    },
    onClosed: {
      type: Function
    }
  },
  methods: {
    dismiss() {
      this.isVisible = false;
      setTimeout(() => {
        if (!!this.onClosed) {
            this.onClosed.apply(this);
          }
      });
    }
  },
  ready() {
    if (this.timeout >= 0) {
      setTimeout(() => {
        this.dismiss();
      }, this.timeout);
    }
  }
};
</script>
