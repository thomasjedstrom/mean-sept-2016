var mongoose = require('mongoose');
var Duck = mongoose.model('Duck');

module.exports = {
	show_all: function(req, res){
		Duck.find({}, function(err, ducks){
			if (err){
				console.log('could not retrieve ducks from db');
				res.render('index', {'duck': []})
			} else if (ducks){
				res.render('index', {'duck': ducks});
			}
		})
	},
	show_one: function(req, res){
		Duck.find({_id: req.params.id}, function(err, duck){
			if (err){
				console.log('error retrieving duck');
				res.redirect('/');
			} else if (duck){
				var this_duck = duck[0]
				res.render('show', {duck: this_duck});
			}
		})
	},
	new: function(req, res){
		console.log('POST DATA', req.body);
		var duck = new Duck({name: req.body.name, age: req.body.age, species: req.body.species, fav_food: req.body.fav_food, img_link: req.body.img_link});
		duck.save(function(err){
			if (err){
				console.log('could not add duck');
			} else {
				console.log('successfully added a duck');
			}
		})
		res.redirect('/');
	},
	edit: function(req, res){
		Duck.find({_id: req.params.id}, function(err, duck){
			if (err){
				console.log('error retrieving duck');
				res.redirect('/');
			} else if (duck){
				var this_duck = duck[0]
				res.render('edit', {duck: this_duck});
			}
		})
	},
	update: function(req, res){
		Duck.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, species: req.body.species, fav_food: req.body.fav_food, img_link: req.body.img_link}, function(err){
			if (err){
				console.log('error updating duck');
			}
			var url = '/ducks/' + req.params.id;
			res.redirect(url);
		});
	},
	destroy: function(req, res){
		Duck.remove({_id: req.params.id}, function(err){
			if (err){
				console.log('error destroying duck');
			}
			res.redirect('/');
		})
	}
}
