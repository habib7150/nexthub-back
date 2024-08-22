const OrderDetailsService = require('../Services/OrderDetailsService');

class OrderDetailsController {
    async getAllOrderDetails(request, response) {
        try {
            const orderDetails = await OrderDetailsService.getAllOrderDetails();
            response.json(orderDetails);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    async getOrderDetailsById(request, response) {
        try {
            const orderDetails = await OrderDetailsService.getOrderDetailsById(request.params.id);
            if (!orderDetails) {
                return response.status(404).json({ message: 'Order details not found' });
            }
            response.json(orderDetails);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    async addOrderDetails(request, response) {
        try {
            const orderDetails = await OrderDetailsService.addOrderDetails(request.body);
            response.json(orderDetails);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
}

module.exports = new OrderDetailsController();