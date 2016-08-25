<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './side-nav';
</style>

<template src="./side-nav.html"></template>

<script>
let className = 'hy_u-hide';
export default {
  methods: {
    showNav() {
      this.$el.classList.remove(className);
    },
    hideNav() {
      let classes = this.$el.className.split(' ');
      classes.push(className);
      this.$el.className = classes.join(' ');
    }
  },
  events: {
    'toggle::siteNav'() {
      if (this.$el.classList.contains(className)) {
        this.showNav();
      } else {
        this.hideNav();
      }
    }
  }
};
</script>
