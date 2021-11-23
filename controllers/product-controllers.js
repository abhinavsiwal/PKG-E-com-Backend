const Product = require("../models/product");

//----- Create New Product-----
const newProduct = async (req, res, next) => {
  const {
    name,
    price,
    description,
    ratings,
    category,
    seller,
    stock,
    numOfReviews,
    reviews,
  } = req.body;
  try {
    const newProduct = new Product({
      name,
      price,
      description,
      ratings,
      category,
      seller,
      stock,
      numOfReviews,
      reviews,
    });
    const product = await newProduct.save();
    res.status(201).json({
      success: true,
      product,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Adding Product Failed" });
  }
};

// Get All Products
const getAllProducts = async (req, res) => {
  let products;
  try {
    products = await Product.find();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Fetching Products Failed" });
  }
  res.status(200).json({
    success: true,
    count: products.length,
    products: products.map((product) => product.toObject()),
  });
};

// Get Product By Product Id
const getProductById = async (req, res) => {
  const productId = req.params.id;
  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Fetching product failed" });
  }
  if(!product){
      return res.status(500).json({message:"Could not find product for this Id"});
  }
  res.json(product);
};

exports.newProduct = newProduct;
exports.getAllProducts = getAllProducts;
exports.getProductById = getProductById;