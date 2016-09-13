var mongoose = require('mongoose');
var RabbitSchema = new mongoose.Schema({
	name: String,
})
var Rabbit = mongoose.model('Rabbit', RabbitSchema)