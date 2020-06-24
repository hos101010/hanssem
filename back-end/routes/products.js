const express = require('express');

const router = express.Router();
const products = require('../database/products');

router.post('/condition', async (req, res) => {
  try {
    const fetchedData = await products.findProductsByCondition(req.body.condition);
    res.json(fetchedData[0]);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

router.post('/', async (req, res) => {
  try {
    const fetchedData = await products.findAllProducts();
    res.json(fetchedData[0]);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;
