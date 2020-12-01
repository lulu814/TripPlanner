const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;

const cors = require('cors')
const path = require('path');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();
app.use(express.static(path.join(__dirname, 'frontend/src')));

//database 
const mongoose = require('mongoose');
//mongoose.connect(keys.mongoURI);
mongoose.connect('mongodb://localhost/TripPlanner',
    {useNewUrlParser: true});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));
require('./server/api/placesApi')(app)
require("./backend/controllers/plans-controller")(app)
require("./backend/controllers/trips-controller")(app)
require("./backend/controllers/users-controller")(app)
