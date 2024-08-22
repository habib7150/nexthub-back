const {Model, DataTypes} = require("sequelize");
const sequelize = require('../Config/Sequelize');
const User = require('./User');


const OrderDetails = require('./OrderDetails');

class Order extends Model{};

Order.init({
    or_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total_amount:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id'
        }
        
    }

},{
        sequelize,
        modelName: 'Order',
        tableName:'orders',
        timestamps: false
    });

   
    


module.exports = Order;