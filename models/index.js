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



// Item.belongsToMany(Location, {
//     through: Ternary, foreignKey: 'item_id',
//     onDelete: 'CASCADE'
// });
// Item.belongsToMany(User,{
//     through: Ternary, foreignKey: 'item_id',
//     onDelete: 'CASCADE'
// });
// Location.belongsToMany(User, {
//     through: Ternary, foreignKey: 'location_id',
//     onDelete: 'CASCADE'
// });
// Location.belongsToMany(Item,{
//     through: Ternary, foreignKey: 'location_id',
//     onDelete: 'CASCADE'
// });
// User.belongsToMany(Location,{
//     through: Ternary, foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });
// User.belongsToMany(Item,{
//     through: Ternary, foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

module.exports = { Item, Location, User, Ternary };