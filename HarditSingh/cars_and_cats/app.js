var http = require('http'),
	fs = require('fs'),
	port = 7077;

var server = http.createServer(function(req,res){
	var routes = {
		'/cars': 			['views/cars.html','text/html','utf8'],
		'/cats': 			['views/cats.html','text/html','utf8'],
		'/cars/new':		['views/carsadd.html','text/html','utf8'],
		'/style': 			['stylesheets/style.css','text/css','utf8'],
		'/carsimg': 		['images/carsimg.jpg','image/jpg',""],
		'/lambo': 			['images/lambo.jpg','image/jpg',""],
		'/someWeirdCar': 	['images/someWeirdCar.jpg','image/jpg',""],
		'/cat1': 			['images/cat1.jpg','image/jpg',""],
		'/cat2':			['images/cat2.jpg','image/jpg',""],
		'/cat3': 			['images/cat3.jpg','image/jpg',""]
	} 
	if (req.url in routes){

		fs.readFile(routes[req.url][0], routes[req.url][2], function (errors, contents){
            res.writeHead(200, {'Content-Type': routes[req.url][1] });  
            res.write(contents);  
            res.end(); 
        });
	}
	else {
        res.writeHead(404);
        res.end('File not found!!!');
    }
});

server.listen(port);
