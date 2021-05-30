const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');
const cache = require('../services/cache');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
  try {
    let response = {};
    const page = req.query.page || 1;
    const cachedData = await cache.get(`quotes_${page}`);

    if (cachedData) {
      console.log('got cached data');
      return res.json(cachedData);
    }

    response = await quotes.getMultiple(req.query.page);
    await cache.saveWithTtl(`quotes_${page}`, response, 60);

    res.json(response);
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});


/* GET quotes listing search. */
router.get('/author/:author', async function(req, res, next) {
  try {
    const page = req.query.page || 1;
    const author = req.params.author;
    if (!author) {
      return res.status(400).json({message: 'please provide author'});
    }
    
    const cacheKey = `quotes_author_${author}_${page}`;
    const cachedData = await cache.get(cacheKey);

    if (cachedData) {
      console.log('got cached data');
      return res.json(cachedData);
    }

    response = await quotes.getByAuthor(req.query.page, author);
    await cache.saveWithTtl(cacheKey, response, 300)

    res.json(response);
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
