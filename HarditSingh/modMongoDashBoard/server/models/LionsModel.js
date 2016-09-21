var mongoose = require('mongoose');
var lionschema = new mongoose.Schema({
	name: String
	});
mongoose.model('Lions', lionschema);
var Lions = mongoose.model('Lions');