var express = require("express"),
	path = require("path"),
	app = express(),
	bodyParser = require('body-parser'),
	port = 8000,
	html_str ="",
	rand=0;

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
	socket.on('sendData',function(data){
		rand = Math.floor(Math.random()*1000);
		html_str 	 = 	"You emitted the following information to the server ";
		html_str 	+= 	JSON.stringify(data);
		html_str	+=	"</br>"; 
		html_str	+= 	"Your lucky number emitter by the server is " + rand;
		io.sockets.emit('emitData',html_str);
	});
});