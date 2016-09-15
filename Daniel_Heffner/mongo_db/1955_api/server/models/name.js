var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var NameSchema = new mongoose.Schema({ name: String });

var Name = mongoose.model('Name', NameSchema);
