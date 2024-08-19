const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');

class User extends Model {}

User.init({
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    firs_name:{
        type: DataTypes.STRING,
        allowNull: true
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: true
    },
    adress:{
        type: DataTypes.STRING,
        allowNull: true
    },
    city:{
        type: DataTypes.STRING,
        allowNull: true
    },
    postal_code:{
        type: DataTypes.STRING,
        allowNull: true
    },
    country:{
        type: DataTypes.STRING,
        allowNull: true
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
    },
    updated_at:{
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
    }
},{sequelize,
    modelName:"User",
    tableName:"users",
    timestamps:true});

module.exports = User;

    



                

