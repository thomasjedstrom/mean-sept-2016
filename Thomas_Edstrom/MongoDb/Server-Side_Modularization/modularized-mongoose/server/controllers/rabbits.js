var mongoose = require('mongoose');
var Rabbit = mongoose.model('Rabbit');
module.exports = {

	index: function(req, res){
		Rabbit.find({}, function(err, result) {  	
			if(err) { console.log(err) };
			res.render('index', {data:result});
		});
	},

	show: function(req, res) {
		Rabbit.find({ _id: req.params.id }, function(err, result) {
			if (err) { console.log(err); }
			res.render('show', { data: result[0] });
		});
	},

	create: function(req, res) {
		Rabbit.create(req.body, function(err, result){
			if(err) { console.log(err) };
			res.redirect('/')
		});
	},

	edit: function(req, res){
		Rabbit.find({ _id: req.params.id}, function(err, result) {
			if(err) { console.log(err) };
			res.render('edit', {data:result[0]});
		});		
	},

	update: function(req, res){
		Rabbit.update({ _id: req.params.id }, req.body, function(err, result){
			if (err) { console.log(err); }
			res.redirect('/');
		});		
	},

	destroy: function(req, res){
		Rabbit.remove({ _id: req.params.id }, function(err, result){
			if(err) { console.log(err) };
			res.redirect('/');
		});		
	}
}
