const express = require('express');
var bodyParser = require('body-parser');
let app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.post('/', function (req, res) {
  console.log("hello")
      res.status(201).send();
});

app.get('/', function (req, res) {
  console.log("heo")
      res.status(200).send("testing");
});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});