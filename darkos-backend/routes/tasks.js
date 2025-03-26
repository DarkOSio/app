const express = require('express');
const router = express.Router();
const tasks = require('../data/exampleTask.json');

router.get('/', (req, res) => {
  res.json(tasks);
});

module.exports = router;
