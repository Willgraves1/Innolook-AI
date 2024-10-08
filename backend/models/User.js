const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  preferences: {
    type: Object,
    default: {},
  }
});

module.exports = mongoose.model('User', UserSchema);