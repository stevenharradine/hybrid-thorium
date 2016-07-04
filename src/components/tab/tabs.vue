<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './tabs.scss';
</style>

<template src="./tabs.html"></template>

<script>
/*
 *  Ex: <tabs active-tab-index="(Integer) 0">
 *        <tab label="Tab A">
 *          Any content
 *        </tab>
 *        <tab label="Tab B" is-disabled="(Boolean) false">
 *          Any content
 *        </tab>
 *       <tabs>
*/
export default {
  props: {
    activeTabIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    isActive(index) {
      return activeTabIndex === index;
    }
  },
  data() {
    return {
      tabs: []
    };
  },
  methods: {
      handleTabListClick(index, tab) {
          if (!tab.isDisabled) {
            this.activeTabIndex = index;
          }
      }
  }
};
</script>
