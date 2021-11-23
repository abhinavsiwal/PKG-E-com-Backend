const Product = require("../models/product");

//----- Create New Product-----
const newProduct = async (req, res, next) => {
    console.log(req.body);
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
    })
    const product = await newProduct.save();
    res.status(201).json({
        success:true,
        product,
    })
} catch (err) {
    console.log(err);
    return res.status(400).json({message:"Adding Product Failed"})
}

};

exports.newProduct = newProduct;
