const express = require('express');
const router = express.Router();
const PinSettings = require('../models/pinSettings')

router.get('/', async (req, res) => {
  const pinSettings = await PinSettings.find()
  console.log(pinSettings);
  res.json(pinSettings)
})

module.exports = router;
