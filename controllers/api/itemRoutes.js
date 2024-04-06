const router = require('express').Router();
const { Item } = require('../../models');

// Look up an item's id number
router.get('/id', async (req, res) => {
    try {
        const item = req.query.item;
        const findItem = await Item.findOne({
            where: { item: item }
        });
        res.status(200).json(findItem.id);
        return findItem.id;
    } catch (err) {
        res.status(500).json({ err: "This item is not available to add. Please only select items from the auto-complete list." });
    };
});

module.exports = router;



