var express = require("express"),
	path = require("path"),
	bodyParser = require('body-parser'),
	app = express(),
	port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client/static/css")));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());

require('./server/config/mongoose.js');
var routes = require('./server/config/routes.js');
routes(app);

var server = app.listen(port, function() {});

