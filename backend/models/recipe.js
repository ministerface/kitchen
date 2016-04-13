var restful = require('node-restful');
var mongoose = restful.mongoose;


var recipeSchema = new mongoose.Schema({
	name:  String,
	price: Number,
	time:  Number,
	images: {
		imageBig: String
	}
});


module.exports = restful.model('Recipes', recipeSchema);