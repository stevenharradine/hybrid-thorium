<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './spinner.scss';
</style>

<template src="./spinner.html"></template>

<script>
export default {
  replace: true,
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
      this.$root.$broadcast('shown::spinner');
    },
    hide() {
      this.active = false;
      this.$root.$broadcast('hidden::spinner');
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
