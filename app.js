// import express 
var express = require('express');
var app = express();

// set folder as standart to search neccessary files
app.use(express.static('data'));
app.use(express.static('backend'));

// set app startpoint
app.get('/', function (req, res) {
  res.sendFile('data/blog.html',{root: __dirname});
});

// display app at http://localhost:3000/ 
app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
