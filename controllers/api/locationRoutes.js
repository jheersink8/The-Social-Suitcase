const router = require('express').Router();
const { Location } = require('../../models');

// Use this route to look up location's ID number based on the string value
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



