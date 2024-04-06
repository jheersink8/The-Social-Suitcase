const router = require('express').Router();
const { User, Item, User_Item } = require('../../models');

// Add my item
router.post('/add', async (req, res) => {
    try {
        const addItem = await User_Item.create({
            ...req.body,
            user_id: req.session.user_id,

        });

        res.status(200).json(addItem);
    } catch (err) {
        res.status(400).json(err);
    }

});