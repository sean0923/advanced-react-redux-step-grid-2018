const jwt = require('jwt-simple');

const config = require('../../config');
const Users = require('../models/users');

const generateTokenForUser = user => {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timeStamp }, config.jwtTokenSecret);
};

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).send({ error: 'You must provide email and password' });
  }

  Users.findOne({ email })
    .then(user => {
      if (user) {
        res.status(422).send({ error: 'Email is in use' });
      }

      const newUser = new Users({ email, password });
      return newUser.save();
    })
    .then(user => {
      res.json({ jwtToken: generateTokenForUser(user) });
    })
    .catch(err => {
      return next(err);
    });
};

exports.signin = (req, res, next) => {
  // at this point user's email and password is checked
  // so just provide user a tocken

  res.json({ jwtToken: generateTokenForUser(req.user) });
  // req.user is available becuase passport did the work for us
};
