var express = require('express');
var app = express();

app.use(express.static('data'));
app.use(express.static('backend'));

app.get('/', function (req, res) {
  res.sendFile('data/blog.html',{root: __dirname});
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
