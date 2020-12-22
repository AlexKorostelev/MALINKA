/* const express = require('express');
const router = express.Router();
const { doCommand } = require('../app.js');

router.put('/', async (req, res) => {
  let { command } = req.body;
  console.log('\x1b[1m\x1b[33m%s\x1b[0m', command);
  doCommand(command);
})

module.exports = router;
 */