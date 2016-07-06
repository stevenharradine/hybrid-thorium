/*
  @desc Add behavior to any element. When clicked, it will open the corresponding overlay
  Example: <button overlay-opener="my-overlay"></button>
*/
export default {
  isLiteral: true,
  eventHandler(e) {
    e.preventDefault();
    this.vm.$root.$broadcast('overlay::open', this.expression);
    this.vm.$root.$broadcast('overlayContainer::open');
  },
  bind() {
    this.el.addEventListener('click', this.eventHandler.bind(this));
  },
  unbind() {
    this.el.removeEventListener('click', this.eventHandler.bind(this));
  },
};
