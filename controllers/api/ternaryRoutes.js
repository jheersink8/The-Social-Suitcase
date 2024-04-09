const router = require('express').Router();
const { Ternary } = require('../../models');
const withAuth = require('../../utils/auth');

// Add item to standard suitcase
//#region 
router.post('/addItem', withAuth, async (req, res) => {
    try {
        const addItem = await Ternary.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(addItem);
    } catch (err) {
        res.status(400).json(err);
    }
});
//#endregion

// Add item to location specific suitcase 
//#region 
router.post('/addItem/:id', withAuth, async (req, res) => {
    try {
        const addItem = await Ternary.create({
            ...req.body,
            location_id: req.params.id,
            user_id: req.session.user_id,
        })
        res.status(200).json(addItem);
    } catch (err) {
        res.status(400).json(err);
    }
});
//#endregion

// Add location to standard suitcase
//#region 
router.post('/addLocation', withAuth, async (req, res) => {
    try {
        const addLocation = await Ternary.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(addLocation);
    } catch (err) {
        res.status(400).json(err);
    }
});
//#endregion

// Delete item from standard suitcase
//#region 
router.delete('/deleteItem', withAuth, async (req, res) => {
    try {
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
});
//#endregion

// Delete location from standard suitcase profile
//#region 
router.delete('/deleteLocation', withAuth, async (req, res) => {
    try {
    const locationData = await Ternary.destroy({
        where: {
            user_id: req.session.user_id,
            location_id: req.body.location_id
        },
    });

    if (!locationData) {
        res.status(404).json({ message: 'This location is not in your list!' });
    }
    res.status(200).json(locationData)
    } catch (err) {
        res.status(500).json(err);
    }
});
//#endregion

// Delete item from specific location's suitcase
//#region 
router.delete('/deleteItem/:id', withAuth, async (req, res) => {
    try {
    const itemData = await Ternary.destroy({
        where: {
            user_id: req.session.user_id,
            item_id: req.body.item_id,
            location_id: req.params.id
        },
    });

    if (!itemData) {
        res.status(404).json({ message: 'This item is not in your list!' });
    }
    res.status(200).json(itemData)
    } catch (err) {
        res.status(500).json(err);
    }
});
//#endregion

module.exports = router;