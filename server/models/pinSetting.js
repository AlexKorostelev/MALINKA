const mongoose = require('mongoose')

const PinSettingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pinNum: {
    type: Number,
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
    default: false,
  },
  pinType: {
    type: String,
    required: true,
  },
  availableCommands: {
    type: Array
  },
})

module.exports = mongoose.model('PinSetting', PinSettingSchema)
