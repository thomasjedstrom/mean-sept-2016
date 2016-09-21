var mongoose = require('mongoose');
var Lions = mongoose.model('Lions');

module.exports = {
	index: function(req,res){
		Lions.find({}, function(err, lions) {
			res.render("index",{data:lions});
		});
	},
	addPage: function(req,res) {
			res.render('add');
	},
	profile: function(req,res) {
		query = {
			'_id': req.params.id
		}
		Lions.findOne(query, function(err, lions) {
			res.render("profile",{data:lions});
		});
	},
	add : function (req,res) {
		var lion = new Lions({name: req.body.name});
		lion.save(function(err) {
			if(err) {
				console.log('something went wrong');
			} 
			else { 
				console.log('successfully added a user!');
				res.redirect('/');
			}
		});
	},
	editPage : function(req,res){
		query = {
			'_id': req.params.id
		}
		Lions.findOne(query, function(err, lions) {
			res.render("edit",{data:lions});
		});
	},
	edit: function(req,res){
		query = {
			'_id': req.params.id
		}
		Lions.update(query, {name: req.body.name}, function(err) {
			res.redirect('/');
		});
	},
	destroy : function(req,res){
		query = {
			'_id': req.params.id
		}
		Lions.remove(query, function(err) {
			res.redirect('/');
		});
	}
}