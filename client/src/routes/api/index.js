const router = require('express').Router();
const eventRoutes = require('./events');

// Event Routes
router.use('/events', eventRoutes);

module.exports = router;