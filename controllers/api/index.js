// Set up /api routes for user, location, item, and ternary
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const itemRoutes = require('./itemRoutes');
const locationRoutes = require('./locationRoutes');
const ternaryRoutes = require('./ternaryRoutes');

router.use('/user', userRoutes);
router.use('/item', itemRoutes);
router.use('/location', locationRoutes);
router.use('/', ternaryRoutes);

module.exports = router; 