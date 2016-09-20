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

var quoteschema = new mongoose.Schema({
	name: String,
	quote: String,
	created_at: {type:Date,default: Date.now}
	});
mongoose.model('quotes', quoteschema);
var Quotes = mongoose.model('quotes');


// Routes
	app.get('/', function(req, res) {
		res.render("index");
	});

	app.get('/quotes', function(req, res) {		
		Quotes.find({},{},{sort:{created_at: -1}},function(err,quotes){

			res.render("quotes",{data:quotes});
		});		
	});

	app.post('/quotes', function(req, res) {
		console.log("POST DATA", req.body);
		
		var quote = new Quotes({
			name: req.body.name,
			quote: req.body.quote
		});
		quote.save(function(err) {
			if(err) {
				console.log('something went wrong');
			} 
			else { // else console.log that we did well and then redirect to the root route
				console.log('successfully added a user!');
				res.redirect('/');
			}
		});
	});

var server = app.listen(port, function() {});

