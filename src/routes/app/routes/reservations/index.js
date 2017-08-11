module.exports = {
  path: 'reservations',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Reservations'));
    });
  }
};
