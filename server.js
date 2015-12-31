var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next){

		console.log('Private Route Hit!');
		next();
	},
	logger: function(req, res, next){

		var date = new Date().toString();
		console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}

};

app.use(middleware.requireAuthentication);

app.get('/about', function(req, res){
	res.send('This is about page.');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Server started at port ' + PORT);
})