
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var path = require('path')


mongoose.connect('mongodb://localhost/kitchen_db');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;


app.use('/api', require('./backend/routes/api'));


app.use(express.static(__dirname + '/public'));
// Here's the new code:
app.use('*', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});


app.listen(port);
console.log("Node Server Listening on port 8080");