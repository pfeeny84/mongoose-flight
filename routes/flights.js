const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
const destinationCtrl = require('../controllers/destinations');
// GET /flights/new
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/new', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.delete('/:id', flightsCtrl.delete);
router.post('/destinations/:id', destinationCtrl.create);
module.exports = router;