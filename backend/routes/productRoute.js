const express = require('express')
const { createProduct, getProducts } = require('../controllers/productController.js');

const router = express.Router()

router.post('/add', createProduct)
router.get('/get', getProducts)

module.exports = router
