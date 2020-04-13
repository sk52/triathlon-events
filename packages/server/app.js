const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const homeRouter = require('./src/routes/homeRoutes');
const apiRouter = require('./src/routes/apiRoutes');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/', homeRouter);
app.use('/api', apiRouter);

module.exports = app;
