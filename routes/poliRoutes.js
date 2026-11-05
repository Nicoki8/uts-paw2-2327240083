const express = require('express');
const router = express.Router();
const poliController = require('../controllers/poliController');

router.post('/', poliController.createPoli);
router.get('/', poliController.getAllPoli);

module.exports = router;