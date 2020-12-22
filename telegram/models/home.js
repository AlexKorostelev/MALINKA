const mongoose = require('mongoose')

const HomeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  pinSettingsId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PinSetting',
    required: true,
  }]
})

const Home = mongoose.model('Home', HomeSchema)
module.exports = Home;
