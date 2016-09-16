var express = require("express"),
	path = require("path"),
	app = express(),
	bodyParser = require('body-parser'),
	port = 5000,
	messages = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
	app.get('/', function(req, res) {
	res.render("index",{messages: messages});
	})

var server = app.listen(port, function() {});

var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket) {
	socket.on('message',function(res){
		messages.push(res);
		io.emit('updateMessageBox',res);
		console.log(messages);
	})

});