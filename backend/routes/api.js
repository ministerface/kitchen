var express = require('express');
var router = express.Router();


var Recipe = require('../models/recipe');

Recipe.methods(['get', 'post', 'put', 'delete']);
Recipe.register(router, '/recipes');

router.get('/', function(req, res){
	res.send('api version 1.1.0');
});


module.exports = router;