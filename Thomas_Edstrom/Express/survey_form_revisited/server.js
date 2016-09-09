var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

// app.use(express.static(path.join(__dirname, "./static")));
app.use("/static", express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({ extended: true }));

var user = {
    name: null,
    location: null,
    language: null,
    comment: null
}


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

////////////////  ROUTING  ///////////////////////////

app.get('/', function(req, res) {
  res.render('index');
})

app.post('/result', function(req, res){
    console.log("POST DATA \n\n", req.body);
    user = req.body;
    res.redirect('/result');
});

app.get('/result', function(req, res){
    res.render('result', {user: user})
})

//////////////////  CONNECTION  ///////////////////////////////

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})

//////////////////  SOCKETS  ///////////////////////////////

var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket) {
	console.log("WE ARE USING SOCKETS!");
	console.log(socket.id);

	socket.on("form_submitted", function (data){
		var random = Math.floor(Math.random()*(1000)+1);
		socket.emit('server_response', {response: data, random: random});
	})
})
	

