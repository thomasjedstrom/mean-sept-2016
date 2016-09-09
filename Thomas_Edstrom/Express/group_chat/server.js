var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

// app.use(express.static(path.join(__dirname, "./static")));
app.use("/static", express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

////////////////  ROUTING  ///////////////////////////

app.get('/', function(req, res) {
  res.render('index');
})

app.post('/new_user', function(req, res){
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


var users = {};
var messages = [];

var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket) {
	// console.log("Socket Connected!");
	// console.log(socket.id);

	var cur_user;

	socket.on("new_user", function (data){
		if (data.name in users){
			socket.emit("login_failure", {message: "Name already taken"});
			return;
		}
		users[data.name]=true;
		cur_user = data.name;

		if (messages.length > 1){
			for(var i in messages){
				socket.emit("messages", messages[i]);
			}
		}

		io.emit("login_success", {message: cur_user + " has joined the conversation"});

	})

	socket.on("new_message", function(data){
		messages.push({name: cur_user, content: data.content})
		io.emit("new_broadcast", {name: cur_user, content: data.content})
	})

	socket.on("user_disconnect", function(){
		io.emit("disconnect_message", {message: cur_user + " has left the conversation"});
		delete users.cur_user;
		cur_user = null;
	})
})
	

