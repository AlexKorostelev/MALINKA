const mongoose = require('mongoose')

const UserTgSchema = mongoose.Schema({
  nickName: {
    type: String,
    required: true,
  },
  homes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }]
})

const UserTg = mongoose.model('UserTg', UserTgSchema)
module.exports = UserTg;
