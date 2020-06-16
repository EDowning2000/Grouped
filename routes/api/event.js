const router = require('express').Router();
const eventsController = require('../../controllers/eventController');
// Matches for '/api/events'
router.route('/')
.get(eventsController.findAll)
.post(eventsController.create);

// Matches for '/api/events/:id'
router.route('/:id')
.get(eventsController.findById)
.put(eventsController.update)
.delete(eventsController.remove);

module.exports = router;