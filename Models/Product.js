const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');
const Category = require('./Catergory');

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
        defaultValue: sequelize.NOW
    },
    updated_at:{
        type:DataTypes.DATE,
        defaultValue: sequelize.NOW
    },
    ca_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'ca_id'
        }

    }
},{
    sequelize,
    modelName: "Product",
    tableName: "products",
    timestamps: false
});



Product.belongsTo(Category, {
    foreignKey: 'ca_id',
    as: 'Category'
});



module.exports = Product;