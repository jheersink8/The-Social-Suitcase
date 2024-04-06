const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ternary extends Model { }

Ternary.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
            unique: false
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'item',
                key: 'id',
            },
            unique: false
        },
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
             references: {
                model: 'location',
                key: 'id',
            },
            unique: false
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ternary',
        indexes: [
            {
                unique: true,
                fields: ['user_id', 'location_id', 'item_id'],
            },

        ],
    }
);

module.exports = Ternary;