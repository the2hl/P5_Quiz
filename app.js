var express = require('express');
var path = require('path');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// error handler
app.use(function(err, req, res, next) {
	res.send(err.toString());
});

module.exports = app;
