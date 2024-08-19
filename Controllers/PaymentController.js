const PaymentService = require('../Services/PaymentService');

class PaymentController {
    async getAllPayments(request, response) {
        try {
            const payments = await PaymentService.getAllPayments();
            response.json(payments);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
    async getPaymentById(request, response) {
        try {
            const payment = await PaymentService.getPaymentById(request.params.id);
            response.json(payment);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
    async addPayment(request, response) {
        try {
            const payment = await PaymentService.addPayment(request.body);
            response.json(payment);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PaymentController();



