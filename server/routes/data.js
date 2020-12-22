const express = require('express');
const router = express.Router();
const mydata = require('../app')
const PinSettings = require('../models/pinSettings')

// router.get('/', async (req, res) => {
//   // const pinSettings = await PinSettings.find({}).populate()
//   console.log(mydata);
//   res.json(mydata);
// })

module.exports = router;
