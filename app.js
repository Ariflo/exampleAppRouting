var express = require("express");
var app = express(); 
var routes = require('./router/routes')();
var port = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

var server = app.listen(port, function () {
  console.log('Server up and listening on', port);
});
