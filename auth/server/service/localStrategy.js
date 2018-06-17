const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('../models/users');

const localOption = {
  usernameField: 'email',
};

// Create local strategy
const localStrategy = new LocalStrategy(localOption, (email, password, done) => {
  // find user
  // if err then return err
  // if find but password dose not match then return null, false
  // if find password match then return user
  User.findOne({ email })
    .then(user => {
      user.comparePassword(password, user.password).then(isMatch => {
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
    .catch(err => {
      console.log('err: ', err);
      return done(err, false);
    });
});

// Tell passport to use this strategy
module.exports = passport.use(localStrategy);
