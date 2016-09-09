var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
})

var server = app.listen(8000, function(){
	console.log('listening on port 8000');
})

var io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket) {
	console.log('socketed');
	console.log(socket.id);
	socket.on('posting_form', function(data){
		var respStr = 'You emitted the following info to the server: ';
		for (var i = 0; i < data.length; i++){
			respStr += data[i].name + ': ';
			respStr += '"' + data[i].value + '" '
		}
		socket.emit('updated_message', {response: respStr});
		socket.emit('random_number', {response: Math.floor(Math.random()*1000+1)});
	})
})
