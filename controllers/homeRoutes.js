const router = require('express').Router();
const { Item_Location, Item, Location_User, Location, User_Item, User } = require('../models');
const confirmAuth = require('../utils/auth')

router.get('/', async (req,res) => {
    res.render('PLACEHOLDER');
})


router.get('/', confirmAuth, async (req, res) => {
    try {
        const itemData = await Item.findAll({
            include: [
                {
                    model: Location,
                    where: { id: 1 }
                },
                {
                    model: User,
                    where: { id: req.session.user_id, }
                }
            ],
        });
        const items = itemData.map((item) => item.get({ plain: true }))
        console.log(items)
        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err);
    };
});


module.exports = router;