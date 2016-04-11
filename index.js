
var express = require('express');
var bodyParser = require('body-parser')
var path = require('path')
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;





app.get('/api', function(req, res) {
    res.json({ message: 'Zaebiss! welcome to our api!' });   
});


app.use(express.static(__dirname + '/public'));
// Here's the new code:
app.use('*', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});


app.listen(port);
console.log("Node Server Listening on port 8080");