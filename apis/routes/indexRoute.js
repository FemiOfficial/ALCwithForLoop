const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to Book A Meal REST API');
});

module.exports = router;
