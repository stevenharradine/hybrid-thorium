<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './legal-counter.scss';
</style>

<template src="./legal-counter.html"></template>

<script>
/*
 * API: <legal-counter
 *        legal-key="(String) key"
 *        legal-lang="(String) lang"
 *        legal-region="(String) region"
 *        is-non-indexed="(Boolean) isNonIndexed"
 *      ></legal-counter>
*/

import mixins from '../../mixins';
import defer from 'lodash/defer';

export default {
  mixins: mixins,
  data() {
    return {
      legalCounter: null
    };
  },
  props: {
    legalKey: {
      type: String,
      required: true
    },
    isNonIndexed: {
      type: Boolean,
      default: false
    },
    legalLang: {
      type: String,
      required: true
    },
    legalRegion: {
      type: String,
      required: true
    }
  },
  events: {
    'legal::udpate'(updateDetail) {
        if (!this.isNonIndexed && updateDetail.key === this.legalKey) {
          this.legalCounter = updateDetail.index + 1;
        }
    }
  },
  methods: {
    clickHandler() {
      this.rootBroadcast('legal::click', this.legalKey);
    }
  },
  beforeCompile() {
    console.log(this.legalKey);
  },
  ready() {
    // console.log(this.legalKey);
    defer(() => {
      this.rootBroadcast('legal::init', {
        key: this.legalKey,
        lang: this.legalLang,
        region: this.legalRegion,
        isNonIndexed: this.isNonIndexed
      });
    });
  }
};
</script>
