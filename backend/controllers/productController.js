const Product = require('../models/productModel.js')


const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body)
    await product.save();
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


module.exports = { createProduct, getProducts }