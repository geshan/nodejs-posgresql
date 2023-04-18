const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');
const appSignal = require('@appsignal/nodejs');


/* GET quotes listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await quotes.getMultiple(req.query.page));
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

/* GET quotes listing error. */
router.get('/error-fix', async function(req, res, next) {
  try {
    res.json(await quotes.getError(req.query.page));
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    appSignal.setError(err);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});


module.exports = router;
