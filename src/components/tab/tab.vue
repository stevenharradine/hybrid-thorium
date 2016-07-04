<template src="./tab.html"></template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tabIndex: 0,
      isVisible: false,
    };
  },
  computed: {
    isVisible() {
      return (this.$parent.activeTabIndex === this.tabIndex);
    },
  },
  created() {
    this.$parent.tabs.push({
      label: this.label,
      isDisabled: this.isDisabled,
    });
  },
  ready() {
    this.$parent.$children.forEach((c, index) => {
      if (c.$el === this.$el) {
        this.tabIndex = index;
      }
    });
  },
  beforeDestroy() {
    this.$parent.tabs.splice(this.tabIndex, 1);
  },
};
</script>
