const router = require('express').Router();
const { Item_Location, User_Item } = require('../../models');

// Add my item to a specific user
router.post('/addUItem', async (req, res) => {
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

// Add my item to a specific location
// TO DO: Define location from JS.  
router.post('/addLItem', async (req, res) => {
    try {
        const addItem = await Item_Location.create({
            ...req.body,
        });

        res.status(200).json(addItem);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delte an item from a user
// router.delete('/deleteUItem', async (req, res) => {

//     try { } catch (err) { }
// })


// --------------------------------
// Include Item_Location, User_Item in production

// --------------------------------
module.exports = router;



