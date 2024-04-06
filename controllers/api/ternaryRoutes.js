const router = require('express').Router();
const { Ternary, User } = require('../../models');
// const withAuth = require('../../utils/auth');

// Add item to standard suitcase
router.post('/addItem', async (req, res) => {
    try {
        console.log(req.body)
        const addItem = await Ternary.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(addItem);
    } catch (err) {
        res.status(400).json(err);
    }
});


// Delete item from standard suitcase
router.delete('/deleteItem', async (req, res) => {
    try {
    console.log(req.body.item_id)
    const itemData = await Ternary.destroy({
        where: {
            user_id: req.session.user_id,
            item_id: req.body.item_id,
            location_id: 1
        },
    });

    if (!itemData) {
        res.status(404).json({ message: 'This item is not in your list!' });
    }
    res.status(200).json(itemData)
    } catch (err) {
        res.status(500).json(err);
    }
})



module.exports = router;