const express = require('express');
const router = express.Router();

const {newProduct}= require('../controllers/product-controllers');

router.post('/product/new',newProduct);

module.exports = router;