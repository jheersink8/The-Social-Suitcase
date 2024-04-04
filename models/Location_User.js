// Import necessary modules 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create bridge table between user and location

class User_Location extends Model {}

// Bridge table field definitions

User_Location.init(
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
        modelName: 'user_location',
    }
);

module.exports = User_Location;