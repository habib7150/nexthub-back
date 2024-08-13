const express = require('express');
const PaymentController = require('./controllers/PaymentController');
const router = express.Router();

router.get('/', (request, response) => {PaymentController.getAllPayments(request, response);});

router.get('/:id', (request, response) => {PaymentController.getPaymentById(request,response);});

router.post('/', (request, response) => {PaymentController.addPayment(request, response);});

module.exports = router;
