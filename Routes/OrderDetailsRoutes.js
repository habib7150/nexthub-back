const express = require('express');
const router = express.Router();
const OrderDetailsController = require('../Controllers/OrderDetailsController');

router.get('/', (request, response) => { OrderDetailsController.getAllOrderDetails(request, response)});

router.get('/:id', (request, response) => { OrderDetailsController.getOrderDetailsById(request, response)});

router.post('/', (request, response) => { OrderDetailsController.addOrderDetails(request, response)});

module.exports = router;