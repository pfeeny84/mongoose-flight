const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
const destinationCtrl = require('../controllers/destinations');
const ticketsCtrl = require('../controllers/tickets');
// GET /flights/new
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.newFlight);
router.post('/new', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.delete('/:id', flightsCtrl.delete);
router.post('/destinations/:id', destinationCtrl.create);
router.get('/tickets/:id', ticketsCtrl.show);
router.post('/tickets/:id', ticketsCtrl.create);
module.exports = router;