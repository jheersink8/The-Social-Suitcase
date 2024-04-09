// Import necessary modules 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const locationValues = require('./values/locationValues')

// Create locations model and datatypes

class Location extends Model { }

Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        country_state: {
            type: DataTypes.ENUM,
            // Importing values from locationValues.js file
            values: locationValues,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'location',
    },
);

module.exports = Location;