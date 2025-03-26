const express = require('express');
const router = express.Router();
const generateAlias = require('../utils/aliasGenerator');

router.post('/connect', (req, res) => {
  const alias = generateAlias();
  res.json({ alias });
});

module.exports = router;
