const express = require('express');
const router = express.Router();

const {newProduct, getAllProducts,getProductById}= require('../controllers/product-controllers');

router.post('/product/new',newProduct);
router.get('/products',getAllProducts);
router.get('/product/:id',getProductById);

module.exports = router;