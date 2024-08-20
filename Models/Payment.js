const {Model, DataTypes} = require('sequelize');

const sequelize = require('../Config/Sequelize');

class Payment extends Model{}

Payment.init({
    pay_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    or_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    payment_method:{
        type: DataTypes.STRING,
        allowNull: false
    },   
    payment_amount:{
        type: DataTypes.DECIMAL(10,2)
    }, 
    payment_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    status:{
        type: DataTypes.ENUM('pending', 'success', 'failed'),
        allowNull: false
    }

},{
    sequelize,
    modelName:"Payment",
    tableName:"payments",
    timestamps:false
});

module.exports = Payment;