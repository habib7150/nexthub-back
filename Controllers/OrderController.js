const OrderService = require('../Services/OrderService');

class OrderController {
    async getAllOrders(request, response) {
        try {
            const orders = await OrderService.getAllOrders();
            response.json(orders);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    async getOrderById(request, response) {
        try {
            const order = await OrderService.getOrderById(request.params.id);
            response.json(order);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    async addOrder(request, response) {
        try {
            const order = await OrderService.addOrder(request.body);
            response.json(order);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
}

module.exports = new OrderController();