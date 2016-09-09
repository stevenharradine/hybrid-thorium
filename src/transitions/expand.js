import velocity from 'velocity-animate';
const DURATION = 300; // in ms
export default {
    css: false,
    enter(el, done) {
      velocity(el, 'slideDown', { duration: DURATION }, done);
    },
    leave(el, done) {
      velocity(el, 'slideUp', { duration: DURATION }, done);
    }
};
