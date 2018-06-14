const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

module.exports = mongoose.model('users', UserSchema);
