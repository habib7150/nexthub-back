const OrderDetails = require('../Models/OrderDetails');

class OrderDetailsService {
    async getAllOrderDetails() {
        return await OrderDetails.findAll({include: ['order', 'product']});
    }
    async getOrderDetailsById(orderDetailsID) {
        return await OrderDetails.findByPk(orderDetailsID,{include: ['order', 'product']});
    }

    async addOrderDetails(orderDetailsData) {
        return await OrderDetails.create(orderDetailsData);
    }
};

module.exports = new OrderDetailsService();