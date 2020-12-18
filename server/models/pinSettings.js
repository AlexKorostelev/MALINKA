const mongoose = require('mongoose')

const PinSettingsSchema = mongoose.Schema({
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
})

const PinSettings = mongoose.model('PinSetting', PinSettingsSchema)
module.exports = PinSettings;
