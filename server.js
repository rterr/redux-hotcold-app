var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var app = express();
app.use('/', express.static('build'));


var highScore = 999;

app.get('/getScore', function (req, res) {
  console.log(highScore);
  res.json({"score": highScore});
});

app.get('/setScore', function (req, res) {

  console.log(req.query.score);
  highScore = (req.query.score < highScore)? req.query.score : highScore;
  console.log(highScore);
  res.json({"score": req.query.score});

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
