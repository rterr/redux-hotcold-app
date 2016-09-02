var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();



var app = express();
app.use('/', express.static('build'));



var highScore = Infinity;

app.post('/getScore', jsonParser, function (req, res) {

  console.log(req.body.score);
  highScore = (req.body.score < highScore)? req.body.score : highScore;
  console.log(highScore);
  res.json({"score": req.body.score});

});


app.get('/getScore', function (req, res) {
  console.log(highScore);
  res.json({"score": highScore});
});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
