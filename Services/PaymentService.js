const Payment = require('./Models/Payment');

class PaymentService {
    async getAllPayments() {
        return await Payment.findAll();
    }

    async getPaymentById(paymentId) {
        return await Payment.findByPk(paymentId);
    }

    async createPayment(paymentData) {
        return await Payment.create(paymentData);
    }
}

module.exports = new PaymentService();