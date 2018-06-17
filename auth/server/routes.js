const passportService = require('./service/passportService');
const Authentication = require('./controllers/authentication');

const requireAuth = passportService.authenticate('jwt', { session: false });

module.exports = app => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'there' });
  });
  app.post('/signup', Authentication.signup);
};
