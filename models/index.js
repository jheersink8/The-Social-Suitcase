const Item_Location = require('./Item_Location');
const Item = require('./Item');
const Location_User = require('./Location_User');
const Location = require('./Location');
const User_Item = require('./User_Item');
const User = require('./User');

Item.belongsToMany(Location, {
    through: Item_Location, foreignKey: 'item_id',
    onDelete: 'CASCADE'
});
Item.belongsToMany(User,{
    through: User_Item, foreignKey: 'item_id',
    onDelete: 'CASCADE'
});
Location.belongsToMany(User, {
    through: Location_User, foreignKey: 'location_id',
    onDelete: 'CASCADE'
});
Location.belongsToMany(Item,{
    through: Item_Location, foreignKey: 'location_id',
    onDelete: 'CASCADE'
});
User.belongsToMany(Location,{
    through: Location_User, foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
User.belongsToMany(Item,{
    through: User_Item, foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { Item_Location, Item, Location_User, Location, User_Item, User };