const PORT = 4000;

const app = require('./app');

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});