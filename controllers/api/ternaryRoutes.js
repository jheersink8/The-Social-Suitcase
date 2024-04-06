const router = require('express').Router();
const { Ternary, User } = require('../../models');
// const withAuth = require('../../utils/auth');

// Add item to standard suitcase
router.post('/addItem',  async (req, res) => {
    try {
    console.log( req.body )
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




module.exports = router;