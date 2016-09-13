// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 3000;

var app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// Mongo
var connection = mongoose.connect('mongodb://localhost/rabbit_db');

var RabbitSchema = new mongoose.Schema({
	name: String,
})

var Rabbit = mongoose.model('Rabbit', RabbitSchema)





// Routes
// INDEX
app.get('/', function(req, res) {
	Rabbit.find({}, function(err, result) {  	
		if(err) { console.log(err) };
		res.render('index', {data:result});
	});
});

// NEW
app.get('/new/', function(req, res) {
	res.render('new');
})

// CREATE
app.post('/', function(req, res) {
	Rabbit.create(req.body, function(err, result){
		if(err) { console.log(err) };
		res.redirect('/')
	});
});

// SHOW
app.get('/:id', function(req, res){
	Rabbit.find({ _id: req.params.id }, function(err, result) {
		if (err) { console.log(err); }
		res.render('show', { data: result[0] });
	});
});


// EDIT
app.get('/:id/edit', function(req, res) {
	Rabbit.find({ _id: req.params.id}, function(err, result) {
		if(err) { console.log(err) };
		res.render('edit', {data:result[0]});
	});  
});

// UPDATE
app.post('/:id', function(req, res){
	Rabbit.update({ _id: req.params.id }, req.body, function(err, result){
		if (err) { console.log(err); }
		res.redirect('/');
	});
});

// DESTROY
app.post('/:id/delete', function(req, res){
	Rabbit.remove({ _id: req.params.id }, function(err, result){
		if(err) { console.log(err) };
		res.redirect('/');
	});
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})