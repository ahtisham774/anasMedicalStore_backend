const express = require('express');
const router = express.Router();
const VenderController = require('../controllers/venderController');

router.post('/', VenderController.addVender);
router.get('/', VenderController.getAllVenders);

module.exports = router;