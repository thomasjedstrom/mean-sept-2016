	var http = require('http'),
		fs = require('fs'),
		port = 5000;

var server = http.createServer(function(req,res){
	var routes = {
		"/": 'index.html',
		'/style.css': 'style.css',
		'/ninjas': 'ninjas.html'
	} 
	var fileType = {
		'index.html':'text/html',
		'style.css' : 'text/css'
	}
	// console.log(req.url)
	if (req.url in routes){
		fs.readFile(routes[req.url], 'utf8', function (errors, contents){
            res.writeHead(200, {'Content-Type': fileType[routes[req.url]]});  // send data about res
            res.write(contents);  //  send res body
            res.end(); // finished!
        });
	}
	else {
        res.writeHead(404);
        res.end('File not found!!!');
    }
});

server.listen(port);


