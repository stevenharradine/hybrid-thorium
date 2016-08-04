
<style lang="sass">
    @import '~telus-hydra/_base_scope';
    @import './legal-container.scss';
</style>

<template src="./legal-container.html"></template>

<script>
 /*
  * API: <legal-container></legal-container>
 */

import mixins from '../../mixins';
import findIndex from 'lodash/findIndex';
import debounce from 'lodash/debounce';
import setFocus from '../../directives/set-focus';

export default {
  mixins,
  directives: {
    setFocus
  },
  data() {
    return {
      indexedLegals: [],
      nonIndexedLegals: [],
      apiLang: null,
      apiRegion: null
    };
  },
  methods: {
    fetchLegals(keys) {
      return fetch(`
          ${this.$root.ligerEndPoint}?lang=${this.apiLang}&region=${this.apiRegion}&html=true
        `, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          applicationKey: this.$root.ligerApplicationKey
        },
        body: JSON.stringify({
          keys: keys
        })
      });
    },
    appendResponseToLegalContainer(type, data) {
      let process = (target, dataAry) => {
        dataAry.forEach(legalResponse => {
          let index = target.findIndex(l => l.key === legalResponse.key);
          if (index > -1) {
            target.$set(index, {
              content: legalResponse.content,
              key: legalResponse.key
            });
          }
        });
      };
      if (type === 'indexed') {
        process(this.indexedLegals, data);
      } else {
        process(this.nonIndexedLegals, data);
      }
    },
    getLegals: (function() {
      return debounce.call(this, function() {
        let indexedKeys = this.indexedLegals.map(legal => legal.key);
        let nonIndexedKeys = this.nonIndexedLegals.map(legal => legal.key);

        if (indexedKeys.length > 0) {
          this.fetchLegals(indexedKeys)
          .then(this.parseJSON)
          .then(data => {
            this.appendResponseToLegalContainer('indexed', data);
          });
        }
        if (nonIndexedKeys.length > 0) {
          this.fetchLegals(nonIndexedKeys)
          .then(this.parseJSON)
          .then(data => {
            this.appendResponseToLegalContainer('nonIndexed', data);
          });
        }
      }, 10);
    })()
  },
  events: {
    'legal::click'(legalKey) {
      let targetLegalIndex = this.indexedLegals.findIndex(l => l.key === legalKey);
      if (targetLegalIndex > -1) {
        this.indexedLegals.forEach((l, i) => {
          if (i !== targetLegalIndex) {
            l.isSelected = false;
          } else {
            this.indexedLegals
            .$set(
              i,
              Object.assign(
                {},
                this.indexedLegals[i],
                { isSelected: true }
              )
            );
          }
        });
      }
    },
    'legal::init'(legalInitDetail) {
      this.apiLang = legalInitDetail.lang;
      this.apiRegion = legalInitDetail.region;
      // check if loaded already
      let containerRef = legalInitDetail.isNonIndexed ? this.nonIndexedLegals : this.indexedLegals;
      let index = findIndex(containerRef, legal => legal.key === legalInitDetail.key);
      // if not found
      if (index < 0) {
        index = containerRef.push(legalInitDetail) - 1;
        this.getLegals();
      }
      if (!legalInitDetail.isNonIndexed) {
        this.rootBroadcast('legal::udpate', {
          key: legalInitDetail.key,
          isNonIndexed: legalInitDetail.isNonIndexed,
          index: index
        });
      }
    }
  }
};
</script>
