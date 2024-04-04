// Import necessary modules 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create bridge table between item and location

class Item_Location extends Model { }

// Bridge table field definitions

Item_Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'item',
                key: 'id',
            },
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'item_location',
    }
);

module.exports = Item_Location;