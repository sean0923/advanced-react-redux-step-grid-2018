const passportService = require('./service/passportService');
const Authentication = require('./controllers/authentication');
const passportLocalService = require('./service/localStrategy');

const requireAuth = passportService.authenticate('jwt', { session: false });
const requireLogin = passportLocalService.authenticate('local', { session: false });

module.exports = app => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'there' });
  });
  app.post('/signup', Authentication.signup);
  app.post('/signin', requireLogin, Authentication.signin);
};
