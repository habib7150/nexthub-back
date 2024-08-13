const express = require('express');
const OrderController = require('../Controllers/OrderController');
const router = express.Router();

router.get('/', (request, response) => {OrderController.getAllOrders(request, response)});

router.get('/:id', (request, response) => {OrderController.getOrderById(request, response)});

router.post('/', (request, response) => {OrderController.createOrder(request, response)});

module.exports = router;


