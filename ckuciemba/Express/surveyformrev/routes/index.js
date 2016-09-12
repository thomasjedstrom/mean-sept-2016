module.exports= function Route(app, server){

    var io = require("socket.io").listen(server);

    // root route to render the index.ejs view
    app.get('/', function(req, res) {
        res.render("index");
    })

    io.sockets.on("connection", function(socket){
        socket.on("posting_form", function(data){
            // console.log(data);
            var rannum= Math.floor((Math.random() * 1000) + 1);

            socket.emit("updated_msg", {response: data});
            socket.emit("rannum", {response: rannum});
        })
    })
};
