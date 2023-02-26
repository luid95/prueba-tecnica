var express = require('express');
var pruebaController = require('../controllers/prueba');

var router = express.Router();

router.post('/prueba', pruebaController.prueba);

module.exports = router;