//Necessary imports for the app.
var express = require('express');
var morgan = require('morgan');

//Create the app
var app = express();
var port = process.env.PORT||5000;

//Log requests to console
app.use(morgan('dev'));

var routes = require('./routes/routes')

app.use(express.static(__dirname +'/public'));
app.set('view engine','ejs');
app.use('/',routes);
app.listen(port);

