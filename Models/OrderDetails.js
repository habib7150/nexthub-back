const { Model, DataTypes } = require("sequelize");

const sequelize = require("../Config/Sequelize");

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
            model: "orders",
            key: "or_id",
        },
    },
    pr_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "products",
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
        defaultValue:
    }
},{
    sequelize,
    modelName: "OrderDetails",
    tableName: "order_details",
    timestamps: false
});

module.exports = OrderDetails;