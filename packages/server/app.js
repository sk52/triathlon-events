const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const homeRouter = require('./routes/homeRoutes');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/', homeRouter);

module.exports = app;