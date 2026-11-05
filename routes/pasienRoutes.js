const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasienController');

router.post('/', pasienController.createPasien);
router.get('/', pasienController.getAllPasien);
router.get('/:id', pasienController.getPasienById);

module.exports = router;