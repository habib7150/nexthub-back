const { Model, DataTypes } = require("sequelize");

const sequelize = require("../Config/Sequelize");

const Product = require("./Product");

class Category extends Model {}

Category.init(
  {
    ca_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn("NOW"),
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn("NOW"),
    },
  },
  {
    sequelize,
    modelName: "Category",
    tableName: "categories",
    timestamps: true,
  }
);

Category.hasMany(Product, { as: "products", foreignKey: "ca_id" });
Product.belongsTo(Category, { as: "categorie", foreignKey: "ca_id" });

module.exports = Category;
