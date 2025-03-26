const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { taskId, ipfsHash } = req.body;
  if (!taskId || !ipfsHash) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  res.json({ status: 'Submitted', taskId, ipfsHash });
});

module.exports = router;
