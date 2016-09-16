var express = require("express"),
	path = require("path"),
	app = express(),
	bodyParser = require('body-parser'),
	port = 8000,
	count= 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
	app.get('/', function(req, res) {
	res.render("index");
	})

var server = app.listen(port, function() {});
var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket) {
	socket.on('load',function(){
		socket.emit("sendCount",count);
	});
	socket.on('countUp',function(){
		count+=1;
		io.sockets.emit('sendCount',count);
	});
	socket.on('reset',function(){
		count = 0;
		io.sockets.emit('sendCount',count);
	})
});