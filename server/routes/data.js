const express = require('express');
const router = express.Router();
const PinSetting = require('../models/pinSetting')

router.get('/', async (req, res) => {
  const pinSettings = await PinSetting.find({})
  console.log(pinSettings);
  res.json(pinSettings)
})

module.exports = router;
