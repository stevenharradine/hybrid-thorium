export default {
  methods: {
    rootBroadcast(...args) {
      this.$broadcast.apply(this.$root, args);
    },
  },
};
