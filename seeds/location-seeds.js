const locationValues = require('../models/values/locationValues')
const { Location } = require('../models');

// Location Seed Data 
// Map and create array file from models -> values -> locationValues so it's in a JSON format and export it to seed.js
const locationData = locationValues.map(country_state => ({ country_state }));
const seedLocations = () => Location.bulkCreate(locationData);
module.exports = seedLocations;