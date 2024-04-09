// Set up all the relationships for tables. Using a ternary "bridge" table to handle the many-to-many relationships

const Item = require('./Item');
const Location = require('./Location');
const User = require('./User');
const Ternary = require('./ternary');

User.hasMany(Ternary, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Location.hasMany(Ternary, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
});

Item.hasMany(Ternary, {
    foreignKey: 'item_id',
    onDelete: 'CASCADE'
});

module.exports = { Item, Location, User, Ternary };