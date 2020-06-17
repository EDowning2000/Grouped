const router = require('express').Router();
const eventRoutes = require('./event');

// Event Routes
router.use('/events', eventRoutes);

module.exports = router;