const { Model, DataTypes } = require("sequelize");

const sequelize = require("../Config/Sequelize");
const OrderDetails = require("./OrderDetails");
const Order = require("./Order");

class Inclure extends Model {}

Inclure.init({
    or_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: "Order",
            key: "or_id",
        },
    },
    det_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: "OrderDetails",
            key: "det_id",
        },
    }
},{
    sequelize,
    modelName: "Inclure",
    tableName: "inclure",
    timestamps: false
});

Order.belongsToMany(OrderDetails,{as: 'OrderDetails', through: Inclure, foreignKey: 'or_id'});

OrderDetails.belongsToMany(Order,{as: 'Orders', through: Inclure, foreignKey: 'det_id'});

module.exports = Inclure;