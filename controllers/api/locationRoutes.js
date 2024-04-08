const router = require('express').Router();
const { Location } = require('../../models');

// Look up a location's id number
router.get('/id', async (req, res) => {
    try {
    const location = req.query.country_state;
        const findLocation = await Location.findOne({
            where: { country_state: location }
        });
        res.status(200).json(findLocation.id);
        return findLocation.id;
    } catch (err) {
        res.status(500).json({ err: "This location is not available to add. Please only select items from the auto-complete list." });
    };
});




module.exports = router;



