const Order = require('../Models/Order');

class OrderService {
    async getAllOrders(){
        return await Order.findAll({include:[{
            model: Order,
            as: 'order'
        }]});
    }

    async getOrderById(orderId){
        return await Order.findByPk(orderId);
    }

    async addOrder(orderData){
        return await Order.create(orderData);
    }

}

module.exports = new OrderService();