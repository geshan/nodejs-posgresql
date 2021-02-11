const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');
const pMemoize = require('p-memoize');
const ONE_MINUTE_IN_MS = 60000;
const memGetMultiple = pMemoize(quotes.getMultiple, {maxAge: ONE_MINUTE_IN_MS});

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await memGetMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* POST quotes */
router.post('/', async function(req, res, next) {
  try {
    res.json(await quotes.create(req.body));
  } catch (err) {
    console.error(`Error while posting quotes `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;
