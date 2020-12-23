const express = require('express');
const router = express.Router();
const app = require('../app')

const Home = require('../models/home');
router.get('/homes', async (req, res) => {
  const homes = await Home.find().populate('pinSettingsId')
  console.log(homes);
  res.json(homes);
})

module.exports = router;
