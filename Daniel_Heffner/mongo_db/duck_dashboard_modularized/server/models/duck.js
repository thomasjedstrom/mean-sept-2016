var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var DuckSchema = new mongoose.Schema({
	name: String,
	age: Number,
	species: String,
	fav_food: String,
	img_link: String
})

var Duck = mongoose.model('Duck', DuckSchema);
