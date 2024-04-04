const seedUsers = require('./user-seeds');
const seedLocations = require('./location-seeds');
const seedItems = require('./item-seeds');
const sequelize = require('../config/connection');

// Run all seed functions from other seed files
const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedLocations();
    await seedItems();
    process.exit(0);
};

seedAll();