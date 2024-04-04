const itemValues = require('../models/values/itemValues')
const { Item } = require('../models');

// Items Seed Data 
// Map and create array file from models -> values -> itemValues so it's in a JSON format and export it to seed.js
const itemData = itemValues.map(item => ({ item }));
const seedItems = () => Item.bulkCreate(itemData);
module.exports = seedItems;