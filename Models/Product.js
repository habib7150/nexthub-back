const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');

class Product extends Model {}

Product.init({
    pr_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false  
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    price:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category:{
        type: DataTypes.STRING,
        allowNull: true
    },
    image_url:{
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    updated_at:{
        type:DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    ca_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    modelName: "Product",
    tableName: "products",
    timestamps: false
})

module.exports = Product;