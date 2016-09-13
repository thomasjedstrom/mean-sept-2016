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
app.use("/static", express.static(__dirname + '/static'))


// Mongo
var connection = mongoose.connect('mongodb://localhost/quotes_db');

var QuoteSchema = new mongoose.Schema({
	name: String,
	content: String,
})

var Quote = mongoose.model('Quote', QuoteSchema)





// Routes
// INDEX
app.get('/', function(req, res) {
	res.render('index');
});


// CREATE
app.post('/quotes', function(req, res) {
	Quote.create(req.body, function(err, result){
		console.log(req.body)
		if(err) {
			res.render('index', {data: err})
		};
		res.redirect('/quotes')
	});
});

// QUOTES PAGE
app.get('/quotes', function(req, res){
	Quote.find({}, function(err, result) {
		if (err) { console.log(err); }
		res.render('quotes', { data: result });
	});
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})