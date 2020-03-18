const express = require("express");
const router = express.Router();

router.get('/health', function (req, res) {
    res.status(200);
    res.send('OK');
});

router.get('/', function (req, res) {
    res.send('/ route page');
});

module.exports = router;