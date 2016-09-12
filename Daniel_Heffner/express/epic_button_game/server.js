var express = require('express');
var path = require('path');

var app = express();
var number = 0;

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index', {'number': number});
})

var server = app.listen(8000, function(){
	console.log('listening on port 8000');
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	console.log('socket: ' + socket.id);
	socket.on('epic', function(){
		number++;
		io.emit('update', {'number': number});
	})
	socket.on('reset', function(){
		number = 0;
		io.emit('update', {'number': number});
	})
})
