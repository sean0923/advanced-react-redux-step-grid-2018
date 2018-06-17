const passport = require('passport');
const PassportJwt = require('passport-jwt');

const User = require('../models/users');
const config = require('../config');

// Set up option for Jwt
const jwtOption = {
  jwtFromRequest: PassportJwt.ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.jwtTokenSecret,
};

// Create JWT strategy (jwtLoginStrategy)
const jwtLoginStrategy = new PassportJwt.Strategy(jwtOption, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    // if there is error send error with false
    if (err) {
      return done(err, false);
    }

    // if user exist then send user
    // else send false
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtLoginStrategy);
