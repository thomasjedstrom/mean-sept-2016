var mongoose = require('mongoose');
var Model = mongoose.model('MainModel');

module.exports = {
	index: function(req,res) {
		Model.find({},function(err,data){
			res.json(data);
		})
	},
	addName : function(req,res) {
		var name = new Model({name: req.params.name});
		name.save(function(err) {
			if(err) {
				console.log('something went wrong');
			} 
			else { 
				console.log('successfully added a user!');
				res.redirect('/');
			}
		});
	},
	removeName : function(req,res) {
		query = {
			'name': req.params.name
		}
		Model.remove(query, function(err) {
			res.redirect('/');
		});
	},
	getName: function(req,res) {
		query = {
			'name': req.params.name
		}
		Model.findOne(query, function(err, data) {
			res.json(data);
		});
	}

}


