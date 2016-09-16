var express = require('express');
var app = express();

// app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

app.listen(8000, function() {
  console.log('listening on port 8000');
});
