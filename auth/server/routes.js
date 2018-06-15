const Authentication = require('../controllers/authentication');

module.exports = app => {
  app.post('/signup', Authentication.signup);
  // app.get('/', (req, res, next) => {
  //   res.send([1, 2, 3]);
  // });

  // app.get('*', (req, res) => {
  //   res.send('working?');
  // });
};
