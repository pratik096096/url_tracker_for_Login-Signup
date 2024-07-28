
const express = require('express');
const jwt = require('jsonwebtoken');
const TrackedUrl = require('../models/TrackedUrl');

const router = express.Router();
const jwtSecret = 'your_jwt_secret';

const authenticate = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        req.userId = decoded.userId;
        next();
    });
};

router.post('/track', authenticate, async (req, res) => {
    const { url } = req.body;

    try {
        const newTrackedUrl = new TrackedUrl({ userId: req.userId, url });
        await newTrackedUrl.save();
        res.json({ message: 'URL tracked successfully' });
    } catch (error) {
        console.error('Error tracking URL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/tracked-urls', authenticate, async (req, res) => {
    try {
        const trackedUrls = await TrackedUrl.find({ userId: req.userId });
        res.json({ trackedWebsites: trackedUrls.map(t => t.url) });
    } catch (error) {
        console.error('Error fetching tracked URLs:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
