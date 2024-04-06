// Import necessary modules 
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
// Define a new Sequlize model named "Users" that extends the base Model class
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
};
// User table field definitions (ID, first name, last name, email, and password)
User.init(
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true,
        // },
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //   Password must be at least 8 characters
                len: [8]
            },
        },
    },
    {
        // Ensure password is encrypted before being stored in the database
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                  return newUserData;
           
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;