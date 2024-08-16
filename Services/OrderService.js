const Order = require('../Models/Order');

class OrderService {
    async getAllOrders(){
        return await Order.findAll({include:['user', 'product' ]});
    }

    async getOrderById(orderId){
        return await Order.findByPk(orderId,{include:['user', 'product' ]});
    }

    async addOrder(orderData){
        return await Order.create(orderData);
    }

}

module.exports = new OrderService();