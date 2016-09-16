// npm install --save express body-parser express-session ejs socket.io mongoose

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(session({secret: 'codingdojorocks'}));

app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/bower_components/"));
app.use(express.static(__dirname + "/static"));

require('./server/config/mongoose.js');     // Link my mongoose connector --> models
require('./server/config/routes.js')(app);  // Link my routes

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
});
