var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/items');

/* Items list page */
router.get('/', ctrlLocations.itemList);

module.exports = router;
