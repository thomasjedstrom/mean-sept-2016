var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var messages = [];
app.get('/', function(req, res){
	res.render('index', {'messages': messages})
})

var server = app.listen(8000, function(){
	console.log('listening on port 8000');
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	console.log('socket: ' + socket.id);
	var user;
	socket.on('new_user', function(name){
		user = name;
		socket.emit('setup', {'history': messages});
	})
	socket.on('new_message', function(msg){
		messages.push({ 'name': user, 'msg': msg.msg });
		io.emit('update', { 'name': user, 'msg': msg.msg });
	})
})
