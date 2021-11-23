const express = require('express');
const router = express.Router();

const {newProduct, getAllProducts}= require('../controllers/product-controllers');

router.post('/product/new',newProduct);
router.get('/products',getAllProducts);

module.exports = router;