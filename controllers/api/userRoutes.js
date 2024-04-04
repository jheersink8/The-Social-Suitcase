const router = require('express').Router();
const { User } = require('../../models');

// Create a new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Log a user in 
router.post('/login', async (req, res) => {

    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        // If bad username
        if (!userData) {
            res.status(400).json({ message: "Username and password don't match. Please try again." });
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        // If bad password
        if (!validPassword) {
            res.status(400).json({ message: "Username and password don't match. Please try again." });
            return;
        }
        // If good username/password combo
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json({ user: userData, message: 'Successful Login!' })
        });

    } catch (err) {
        res.status(500).json({ message: "Login failed. Please try again later." });
    }
});

// Log user out
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;