var mongoose = require('mongoose');
var People = mongoose.model('People');
module.exports = {

	index: function(req, res){
		People.find({}, function(err, result) {  	
			if(err) { console.log(err) };
			res.json({data:result});
		});
	},

	create: function(req, res) {
		People.create({ name: req.params.name }, function(err, result){
			if(err) { console.log(err) };
			res.redirect('/')
		});
	},

	destroy: function(req, res){
		People.remove({ name: req.params.name }, function(err, result){
			if(err) { console.log(err) };
			res.redirect('/');
		});		
	},

	show: function(req, res) {
		People.find({ name: req.params.name }, function(err, result) {
			if (err) { console.log(err); }
			res.json({ data: result[0] });
		});
	},

}
