<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './overlay-container.scss';
</style>

<template src="./overlay-container.html"></template>

<script>
/*
* Ex: <overlay-container is-visible="(Boolean) false">
      </overlay-container>
*/
const ESC = 27;
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isVisible(isVisible) {
      if (isVisible) {
        window.document.body.style.overflow = 'hidden';
        window.document.body.style.position = 'fixed';
        // window.document.body.style.height = '100%';
      } else {
        window.document.body.style.overflow = 'visible';
        window.document.body.style.position = '';
        // window.document.body.style.height = 'auto';
      }
    }
  },
  events: {
    'overlayContainer::open'() {
      this.isVisible = true;
    },
    'overlayContainer::close'() {
      this.isVisible = false;
    }
    },
  ready() {
    window.document.addEventListener('keydown', (evt) => {
      evt = evt || window.event;
      if (evt.keyCode === ESC) {
        this.isVisible = false;
      }
    });
  }
};
</script>
