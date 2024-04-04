// Import necessary modules 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const itemValues = require('./values/itemValues')

class Item extends Model { }

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        item: {
            type: DataTypes.ENUM,
            // Importing values from itemValues.js file
            values: itemValues,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'item',
    }
);

module.exports = Item;