const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
// GET /flights/new
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/new', flightsCtrl.create);
router.get('/:id', flightsCtrl.show)
module.exports = router;