const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');

// load environment variables from .env
require('dotenv').config();

const app = express();

// specify port
const PORT = process.env.PORT || 3000;

// set backend server proxy
console.log(`The backend server URL: ${process.env.REACT_APP_SERVER_URL}`);
app.all('/api/*', proxy(`${process.env.REACT_APP_SERVER_URL}`));

// serve static client
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

// server is listening
app.listen(PORT, (req, res) => {
    console.log( `The client server is listening on port: ${PORT}`);
});
