// Import necessary modules 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create bridge table between item and user

class User_Item extends Model {}

// Bridge table field definitions

User_Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'item',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_item',
    }
);

module.exports = User_Item;