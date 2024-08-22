const OrderDetails = require('../Models/OrderDetails');

class OrderDetailsService {
    async getAllOrderDetails() {
        return await OrderDetails.findAll({include: [{
            model: OrderDetails,
            as: 'orderDetails'
        }]});
    }
    async getOrderDetailsById(orderDetailsID) {
        return await OrderDetails.findByPk(orderDetailsID);
    }

    async addOrderDetails(orderDetailsData) {
        return await OrderDetails.create(orderDetailsData);
    }
};

module.exports = new OrderDetailsService();