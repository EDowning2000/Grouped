const router = require('express').Router();
const eventRoutes = require('./event');
const userRoutes = require ('./users')

// Event Routes
router.use('/events', eventRoutes);
router.use('./users', userRoutes)

module.exports = router;