
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.post('/', ProductController.addProduct);
router.get('/', ProductController.getAllProducts);
router.get('/home', ProductController.getStocksInfo);
router.put('/', ProductController.editProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;