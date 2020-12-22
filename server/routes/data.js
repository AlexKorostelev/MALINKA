const express = require('express');
const router = express.Router();
const PinSettings = require('../models/pinSetting')

router.get('/', async (req, res) => {
  const pinSettings = await PinSettings.find({}).populate()
  console.log(pinSettings);
  res.json(pinSettings)
})

module.exports = router;
