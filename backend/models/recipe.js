var restful = require('node-restful');
var mongoose = restful.mongoose;


var recipeSchema = new mongoose.Schema({
	name: String,
	price:Number,
	time: Number
});


module.exports = restful.model('Recipes', recipeSchema);