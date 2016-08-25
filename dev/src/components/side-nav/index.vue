<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './side-nav';
</style>

<template src="./side-nav.html"></template>

<script>
export default {
  events: {
    'toggle::siteNav'() {
      let className = 'hy_u-hide';
      if (this.$el.classList.contains(className)) {
        this.$el.classList.remove(className);
      } else {
        let classes = this.$el.className.split(' ');
        classes.push(className);
        this.$el.className = classes.join(' ');
      }
    }
  }
};
</script>
