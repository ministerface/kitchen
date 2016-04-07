var express = require('express');
var bodyParser = require('body-parser')
var path = require('path')
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(8080);
console.log("Node Server Listening on port 9090");