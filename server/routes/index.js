const express = require('express');
const router = express.Router();
const authMiddeleware = require('../middelware/auth.js')

router.get('/', authMiddeleware, (req, res) => {
  res.send('main')
})

module.exports = router;
