const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/homeControllers');

router.get('/health', homeControllers.getHealth);

router.get('/', homeControllers.getRoot);

module.exports = router;
