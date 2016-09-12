module.exports = function Route(app, server){
	// this gets the socket.io module
	var io = require('socket.io').listen(server)
	// root route to render the index.ejs view
	var count =0;
	//listen to connection even from the client side
	io.sockets.on('connection', function (socket){
		//server listens to "posting_form" event
	 	socket.on("posting_form", function (data){
			count +=1;
			io.emit("push_counter", {response: count});
		  //will emit the data to the client
        })
        socket.on("reset_counter", function(data){
            count=0;
            io.emit("reset_response", {response:count});
        })
	})

	app.get('/', function(request, response) {
		response.render("index");
		// res.render("styles");
	})
};
