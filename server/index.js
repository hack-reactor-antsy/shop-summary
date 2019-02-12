const express = require('express');

let app = express();
var bodyParser = require('body-parser');
let retrieveOne = require('../database/seed.js').retrieveOne;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/shop/:productId', (req, res) => {
  let item = req.params.productId;
  retrieveOne(item, (err, data) => {
    if (err) {
      res.status(404).end();
    }
    res.status(200).send(data).end();
  });
});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});