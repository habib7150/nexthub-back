const { Model, DataTypes } = require("sequelize");

const sequelize = require("../Config/Sequelize");

const Product = require("./Product");
const OrderDetails = require("./OrderDetails");

class Avoir extends Model {}

Avoir.init({
    pr_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Product',
            key: 'pr_id'
        }
    },
    det_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'OrderDetails',
            key: "det_id"
        }
    }
},{
    sequelize,
    timestamps: false,
    modelName: "Avoir",
    tableName: "avoir"
    
 
});

Product.belongsToMany(OrderDetails,{as:'OrderDetails',through:Avoir, foreignKey:'det_id'})

OrderDetails.hasMany(Product,{as: 'Product', through: Avoir, foreignKey: 'det_id'});


module.exports = Avoir;