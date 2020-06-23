const express = require('express');

const router = express.Router();
const products = require('../database/products');

router.post('/', async (req, res) => {
    try {
        let fetchedData = await products.findAllProducts();
        res.json(fetchedData[0]);
    } catch(err){
        res.status(500).json({ error: error.toString() });
    }
});

module.exports = router;
