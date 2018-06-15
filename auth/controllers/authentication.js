const Users = require('../models/users');

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  Users.findOne({ email })
    .then(user => {
      if (user === null) {
        const user = new Users({ email, password });
        return user.save();
      } else {
        res.send('user already exist');
      }
    })
    .then(newUser => {
      res.send(newUser);
    })
    .catch(err => {
      console.log('err: ', err);
      res.send(err);
    });
};
