var express = require("express"),
	path = require("path"),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/basic_mongoose');

var lionschema = new mongoose.Schema({
	name: String
	})
mongoose.model('lions', lionschema);
var Lions = mongoose.model('lions');
var liondata;

// Routes
	app.get('/', function(req, res) {
		Lions.find({}, function(err, lions) {
			res.render("index",{data:lions});
		});
	});
	app.get('/add',function(req,res){
		res.render('add');
	});
	
	app.get('/lion/:id',function(req,res){
		query = {
			'_id': req.params.id
		}
		Lions.findOne(query, function(err, lions) {
			res.render("profile",{data:lions});
		});
		
	});

	app.post('/lions', function(req, res) {
		console.log("POST DATA", req.body);
		var lion = new Lions({name: req.body.name});
		lion.save(function(err) {
			if(err) {
				console.log('something went wrong');
			} 
			else { // else console.log that we did well and then redirect to the root route
				console.log('successfully added a user!');
				res.redirect('/');
			}
		});
	});

	app.get('/lion/:id/edit',function(req,res){
		query = {
			'_id': req.params.id
		}
		Lions.findOne(query, function(err, lions) {
			res.render("edit",{data:lions});
		});
	});
		
	app.post('/lion/:id',function(req,res){
		query = {
			'_id': req.params.id
		}
		Lions.update(query, {name: req.body.name}, function(err) {
		res.redirect('/');
		});
	});

	app.get('/lion/:id/destroy',function(req,res){
		query = {
			'_id': req.params.id
		}
		Lions.remove(query, function(err) {
			res.redirect('/');
		});
	})
	


var server = app.listen(port, function() {});


// var io = require('socket.io').listen(server)
// io.sockets.on('connection', function (socket) {
	
// });

// console.log(req.body.name)
// Lions.update(query, {name: req.body.name}, function(err) {
// 			res.redirect('/');
// 		});