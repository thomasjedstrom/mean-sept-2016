var mongoose = require('mongoose');
var ModelSchema = new mongoose.Schema({
  name: String,
})
var MainModel = mongoose.model('MainModel', ModelSchema);