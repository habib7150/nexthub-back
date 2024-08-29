const { Model, DataTypes } = require("sequelize");

const sequelize = require("../Config/Sequelize");

const Order = require("./Order");



class OrderDetails extends Model {}


OrderDetails.init({
    det_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    or_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Order",
            key: "or_id",
        },
    },
    pr_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Product",
            key: "pr_id",
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
},{
    sequelize,
    modelName: "OrderDetails",
    tableName: "order_details",
    timestamps: false
});





module.exports = OrderDetails;