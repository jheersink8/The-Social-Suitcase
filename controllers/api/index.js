// Set up routes for user, location, and item
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const itemRoutes = require('./itemRoutes');
// const locationRoutes = require('./locationRoutes');


router.use('/user', userRoutes);
router.use('/item', itemRoutes);
// router.use('/location', locationRoutes);

module.exports = router; 