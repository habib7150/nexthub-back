const express = require('express');
const ProductController = require('./Controllers/ProductController');

const router = express.Router();

router.get('/',(request, response) => {ProductController.getAllProducts(request, response)});

router.get('/:id', (request, response) => {ProductController.getProductById(request, response)});

router.post('/', (request, response) => {ProductController.addProduct(request, response)});

router.patch('/:id', (request, response) => {ProductController.updateProduct(request, response)});

router.delete('/:id', (request, response) => {ProductController.deleteProduct(request, response)});

module.exports = router;