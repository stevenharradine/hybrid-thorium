<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './spinner.scss';
</style>

<template src="./spinner.html"></template>

<script>
import mixins from '../../mixins';
export default {
  replace: true,
  mixins,
  data() {
    return {
      active: false
    };
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    fullScreen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show() {
      this.active = true;
      this.rootBroadcast('shown::spinner');
    },
    hide() {
      this.active = false;
      this.rootBroadcast('hidden::spinner');
    }
  },
  events: {
    'show::spinner'() {
      this.show();
    },
    'hide::spinner'() {
      this.hide();
    }
  }
};
</script>
