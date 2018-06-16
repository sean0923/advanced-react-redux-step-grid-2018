const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// On save hook, encrypt password
// Before saving a model run this function
// Cannot use arrow function because 'this'
UserSchema.pre('save', function(next) {
  const user = this; // <- CANNOT user arrow func

  // generate salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    // generate hash
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }

      // conver user password to hash
      user.password = hash;

      next();
    });
  });
});

module.exports = mongoose.model('users', UserSchema);
