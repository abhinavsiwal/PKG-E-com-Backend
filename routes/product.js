const express = require('express');
const router = express.Router();

const {newProduct, getAllProducts,getProductById, updateProduct}= require('../controllers/product-controllers');

router.post('/product/new',newProduct);
router.get('/products',getAllProducts);
router.get('/product/:id',getProductById);
router.put('/product/update/:id',updateProduct)

module.exports = router;