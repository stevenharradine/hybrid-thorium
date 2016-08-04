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
      let el = window.document.body;
      let className = 'no-scroll';
      if (isVisible) {
        if (!!el.classList) {
          el.classList.add(className);
        } else {
          el.className += ' ' + className;
        }
      } else {
        if (el.classList) {
          el.classList.remove(className);
        } else {
          el.className = el
                          .className
                          .replace(
                            new RegExp(
                              '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' '
                          );
        }
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
