var mongoose = require('mongoose');
var Name = mongoose.model('Name');

module.exports = {
	show_all: function(req, res){
		Name.find({}, function(err, names){
			if (err){
				console.log('could not retrieve names from db');
				res.json(err);
			} else if (names){
				res.json(names);
			}
		})
	},
	show_one: function(req, res){
		Name.find({name: req.params.name}, function(err, name){
			if (err){
				console.log('error retrieving name');
				res.json(err);
			} else if (name){
				res.json(name);
			}
		})
	},
	new: function(req, res){
		var name = new Name({name: req.params.name});
		name.save(function(err){
			if (err){
				console.log('could not add name');
				res.json(err);
			} else {
				console.log('successfully added a name');
				var url = '/'+req.params.name;
				res.redirect(url);
			}
		})
	},
	destroy: function(req, res){
		Name.remove({name: req.params.name}, function(err){
			if (err){
				console.log('error destroying name');
				res.json(err);
			}
			res.json({status: 'deleted'});
		})
	}
}
