// Require packages and set the port
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
require('dotenv').config()
const port = process.env.PORT || 3001;
const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

// Start the server
app.listen(port);