var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/quotes_db');
var QuoteSchema = new mongoose.Schema({
	name: String,
	quote: String
}, {timestamps: true});
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
})

app.get('/quotes', function(req, res){
	Quote.find({}, function(err, quotes){
		if (err){
			console.log('error retrieving quotes');
			res.redirect('/');
		} else if (quotes){
			var quoteList = quotes;
			res.render('show', {quotes: quoteList});
		}
	})
})

app.post('/quotes', function(req, res){
	var new_quote = new Quote({name: req.body.name, quote: req.body.quote});
	new_quote.save(function(err){
		if (err){
			console.log(err);
			res.redirect('/')
		} else {
			console.log('successfully added a quote');
			res.redirect('/quotes');
		}
	})
})

app.listen(8000, function(){
	console.log('listening on port 8000');
})

