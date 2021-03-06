const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const encryptor = require('../helpers/encryptor');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

UserSchema.methods.encryptPassword = encryptor;

UserSchema.methods.matchPassword = function matchPassword(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
