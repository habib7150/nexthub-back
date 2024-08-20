const { Model, DataTypes } = require("sequelize");

const sequelize = require("../Config/Sequelize");



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
      defaultValue: sequelize.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
  },
  {
    sequelize,
    modelName: "Category",
    tableName: "categories",
    timestamps: false
  }
);




module.exports = Category;
