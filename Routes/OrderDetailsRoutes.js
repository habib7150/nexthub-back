const express = require('express');
const router = express.Router();
const OrderDetailsController = require('../Controllers/OrderDetailsController');

router.get('/', (request, result) => { OrderDetailsController.getAllOrderDetails(request, result)});

router.get('/:id', (request, result) => { OrderDetailsController.getOrderDetailsById(request, result)});

router.post('/', (request, result) => { OrderDetailsController.addOrderDetails(request, result)});

module.exports = router;