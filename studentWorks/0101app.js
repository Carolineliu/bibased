var express = require('express');
var app = express();
var hbs = require('express-hbs');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var route = require('./routes/route.js');


app.use(express.static('bower_components/'));
app.use(express.static('public/'));
// app.use(express.static('node_modules/'));

// app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

route.setRoutes(app);

app.listen(3000);
console.log("Listening on port 3000:http://localhost:3000");
