const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
    res.send('/ route page');
})

router.get('/me', function (req, res) {
    res.send('/me route page');
})

module.exports = router;