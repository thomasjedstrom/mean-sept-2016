var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/duck_db');
var DuckSchema = new mongoose.Schema({
	name: String,
	age: Number,
	species: String,
	fav_food: String,
	img_link: String
})
mongoose.model('Duck', DuckSchema);
var Duck = mongoose.model('Duck');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	var ducklist;
	Duck.find({}, function(err, ducks){
		if (err){
			console.log('could not retrieve ducks from db');
			res.render('index', {'duck': []})
		} else if (ducks){
			ducklist = ducks;
			res.render('index', {'duck': ducklist});
		}
	})
})

app.get('/ducks/new', function(req, res){
	res.render('new');
})

app.get('/ducks/:id', function(req, res){
	Duck.find({_id: req.params.id}, function(err, duck){
		if (err){
			console.log('error retrieving duck');
			res.redirect('/');
		} else if (duck){
			var this_duck = duck[0]
			res.render('show', {duck: this_duck});
		}
	})
})

app.post('/ducks', function(req, res){
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
})

app.get('/ducks/:id/edit', function(req, res){
	Duck.find({_id: req.params.id}, function(err, duck){
		if (err){
			console.log('error retrieving duck');
			res.redirect('/');
		} else if (duck){
			var this_duck = duck[0]
			res.render('edit', {duck: this_duck});
		}
	})
})

app.post('/ducks/:id', function(req, res){
	console.log(req.body)
	Duck.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, species: req.body.species, fav_food: req.body.fav_food, img_link: req.body.img_link}, function(err){
		if (err){
			console.log('error updating duck');
		}
		var url = '/ducks/' + req.params.id;
		res.redirect(url);
	});
})

app.post('/ducks/:id/destroy', function(req, res){
	Duck.remove({_id: req.params.id}, function(err){
		if (err){
			console.log('error destroying duck');
		}
		res.redirect('/');
	})
})


app.listen(8000, function(){
	console.log('listening on port 8000');
})

