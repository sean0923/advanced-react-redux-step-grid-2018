const Users = require('../models/users');

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  Users.findOne({ email })
    .then(user => {
      if (user) {
        res.status(422).send({ error: 'Email is in use' });
      }
      const newUser = new Users({ email, password });
      return newUser.save();
    })
    .then(() => {
      res.json({ sucess: true });
    })
    .catch(err => {
      return next(err);
    });
};
