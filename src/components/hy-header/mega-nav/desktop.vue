<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './mega-nav-desktop';
</style>

<template src="./mega-nav-desktop.html"></template>

<script>
import SearchBar from '../search-bar/index.vue';

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    application: {
      type: String,
      required: true
    },
    analytics: {
      type: String,
      required: true
    },
    currentLang: {
      type: String,
      required: true
    }
  },
  methods: {
  },
  components: {
    SearchBar
  },
  ready() {
  }
};
</script>
