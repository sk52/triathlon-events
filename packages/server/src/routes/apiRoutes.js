const express = require("express");
const router = express.Router();
const apiControllers = require('../controllers/apiControllers');

router.get('/events', apiControllers.getEvents);

module.exports = router;
