const passport = require('passport');
const LocalStrategy = require('passport-local')

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
});

// Tell passport to use this strategy
module.exports = passport.use(jwtLoginStrategy);
