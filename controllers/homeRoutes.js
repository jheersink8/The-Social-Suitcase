const router = require('express').Router();
const sequelize = require('../config/connection');
const { Item, Location, User, Ternary } = require('../models');
const withAuth = require('../utils/auth')

// Sort all the items by popularity in the social suitcase and render them
router.get('/social-suitcase', withAuth, async (req, res) => {
    // Get all items with location = 1 (i.e. the personal suitcase) and put them in an array
    const countItems = await Item.findAll({
        include: [
            {
                model: Ternary,
                where: { 'location_id': 1 },
            },
        ],
    });

    // Create an array with all item_id occurences with a location ID of 1
    const itemIDsArray = [];
    countItems.forEach(countItem => {
        itemIDsArray.push(countItem.dataValues.id);
    })

    // Create an array with all item_id occurences and item names with a location ID of 1
    const itemNamesArray = [];
    countItems.forEach(countItem => {
        itemNamesArray.push({
            item_id: countItem.id,
            item: countItem.item
        });
    });

    // Count how many occurences happen of each item_id in the array and put those values in the itemIDsArray object
    const itemCounts = await Ternary.findAll({
        attributes: ['item_id', [sequelize.fn('COUNT', sequelize.col('item_id')), 'count']],
        where: {
            item_id: itemIDsArray
        },
        group: ['item_id']
    });
    const itemCountsArray = [];
    itemCounts.forEach(itemCount => {
        itemCountsArray.push({
            item_id: itemCount.item_id,
            count: itemCount.dataValues.count
        });
    });

    // Combine both arrays into 1
    const combinedArray = [];
    itemCountsArray.forEach(itemCount => {
        const item = itemNamesArray.find(itemName => itemName.item_id === itemCount.item_id);
        if (item) {
            combinedArray.push({
                item_id: itemCount.item_id,
                count: itemCount.count,
                item: item.item
            });
        }
    });

    // Sort those values from most popular to least popular and put in an object
    const items = combinedArray.sort((a, b) => b.count - a.count);

    // Render to page
    res.render('socialSuitcase', {
        items,
        logged_in: req.session.logged_in
    });
});

// Render personal suitcase for user 
router.get('/', withAuth, async (req, res) => {
    try {
        const itemData = await Item.findAll({

            include: [
                {
                    model: Ternary,

                    where: {
                        location_id: 1,
                        user_id: req.session.user_id
                    }
                },
            ],
            order: [[{ model: Ternary }, 'id', 'ASC']]
        });
        const items = itemData.map((item) => item.get({ plain: true }))

        const locationData = await Location.findAll({
            include: [
                {
                    model: Ternary,

                    where: {
                        user_id: req.session.user_id
                    }
                },
            ],

            order: [[{ model: Ternary }, 'id', 'ASC']]
        });
        const locations = locationData.map((location) => location.get({ plain: true }))

        res.render('homepage', {
            items,
            locations,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

// Route for login nav link (if not already logged in)
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Route for location specific page
router.get('/location/:id', withAuth, async (req, res) => {
    try {
        const itemData = await Item.findAll({

            include: [
                {
                    model: Ternary,

                    where: {
                        location_id: req.params.id,
                        user_id: req.session.user_id
                    }
                },

            ],
            order: [[{ model: Ternary }, 'id', 'ASC']]
        });

        const locationData = await Location.findByPk(req.params.id, {

        });

        const items = itemData.map((item) => item.get({ plain: true }))
        const location = locationData.get({ plain: true });


        res.render('location', {
            items,
            location,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;