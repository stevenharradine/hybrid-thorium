<style lang="sass">
    @import 'bourbon';
    @import './search-bar';
</style>

<template src="./search-bar.html"></template>

<script>
export default {
  data() {
    return {
      queryString: ''
    };
  },
  computed: {
    isQueryStringEmpty() {
      return this.queryString === '';
    }
  },
};
</script>
