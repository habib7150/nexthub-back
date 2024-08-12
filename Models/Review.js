const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Sequelize');
const User = require('./User');
const Product = require('./Product');
const Review = require('./Review');

class Review extends Model{};

Review.init({
     user_id:{
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id'
        },
        allowNull: false
    },
    pr_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'pr_id'
        },
        allowNull: false
    },
    rating:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW')
    },
    updated_at:{
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW')
    }
},{
    sequelize,
    modelName: 'Review',
    tableName:'reviews',
    timestamps: true

})

Client.hasMany(Review,{as:'reviews', foreignKey: ('user_id','pr_id') });

Review.belongsTo(Client,{as:'user', foreignKey:('user_id', 'pr_id')});

Review.belongsTo(Product,{as:'product', foreignKey:'pr_id'});

Product.hasMany(Review,{as:'reviews', foreignKey: 'pr_id'});

module.exports = Review;