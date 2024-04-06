const router = require('express').Router();
const { Item, Location, User, Ternary } = require('../models');
const confirmAuth = require('../utils/auth')

const itemValues = require('../models/values/itemValues')

// router.get('/', async (req, res) => {
//     res.render('homepage');
// });

router.get('/social-suitcase', async (req, res) => {
    res.render('socialSuitcase');
});


router.get('/', confirmAuth, async (req, res) => {
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
        });
        const items = itemData.map((item) => item.get({ plain: true }))

        res.render('homepage', {
            items,
            logged_in: req.session.logged_in
        });
        // res.status(200).json(items);
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


module.exports = router;