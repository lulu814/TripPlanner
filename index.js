const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
const dotenv = require('dotenv');
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'frontend/src')));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
require('./server/api/placesApi')(app)
