const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  homes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Home',
    required: true,
  }]
})

const User = mongoose.model('User', UserSchema)
module.exports = User;
