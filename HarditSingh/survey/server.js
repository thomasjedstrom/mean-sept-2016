var express = require("express"),
	path = require("path"),
	app = express(),
	bodyParser = require('body-parser'),
	port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
	app.get('/', function(req, res) {
	res.render("index");
	})
	app.post('/users', function(req, res) {
		console.log(req.body.name);
	res.render('result',{data: req.body});
	})

app.listen(port);