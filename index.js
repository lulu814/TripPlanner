const express = require('express');
const bodyParser = require('body-parser');
const keys = require('./backend/config/keys');

const app = express();
const port = process.env.PORT || 8000;

const cors = require('cors')
const path = require('path');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

//database 
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
// mongoose.connect('mongodb://localhost/TripPlanner',
//    {useNewUrlParser: true});

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

require('./server/api/placesApi')(app)
require("./backend/controllers/plans-controller")(app)
require("./backend/controllers/trips-controller")(app)
require("./backend/controllers/users-controller")(app)

if (process.env.PORT) {
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
} else {
    app.use(express.static(path.join(__dirname, 'frontend/src')));
}

app.listen(port, () => console.log(`Listening on port ${port}`));

