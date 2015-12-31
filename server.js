var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', function(req, res){
	res.send('This is about page.');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Server started at port ' + PORT);
});