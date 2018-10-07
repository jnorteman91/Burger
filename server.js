// Dependencies
var express = require('express');
var method = require('method-override');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

// Server setup
var app = express();
var port = process.env.PORT || 9498;

// Set the app to listen to the port
app.listen(port);

// Handlebars engine
app.engine('handlebars', handlebars({ defaultLayout: 'main'}));

// set handlebars engine
app.set('view engine', 'handlebars');

// Serve static content for the app from the public directory
app.use(express.static(__dirname + '/public'));

// Parse application
app.use(bodyParser.urlencoded({ exended: false }));

// Override with POST
app.use(methodOverride('_method'));

// Require burgers_controller.js
require('./controllers/burgers_controller.js')(app);