/*
LOADING REQUIRED PACKAGES...
*/
var http = require('http');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3005); // SETTING ENTRY PORT
app.set('views', __dirname + '/app/server/views'); // DEFINING VIEWS FOLDER
app.set('view engine', 'ejs'); // SETTING VIEW ENGINE
app.use(express.static(__dirname + '/app/public')); // DEFINING FOLDER ACCESSIBLE BY USERS

require('./app/routes')(app); // CALLING ROUTES FILE

/*
HTTP SERVER CREATED
*/
http.createServer(app).listen(app.get('port'), function(){
	console.log('System is running on port ' + app.get('port') + '.');
});

