/*
  @desc Add behavior to any element.
  When eval to true, it will set element tab index to 0 and focus on it.
  Example: <div set-focus="willFocusWhenTrue"></div>
*/

import defer from 'lodash/defer';
export default {
  update(newVal) {
    if (newVal === true) {
      defer(() => {
        this.el.tabIndex = 0;
        this.el.focus();
      });
    }
  },
};
