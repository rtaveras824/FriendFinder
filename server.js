var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
//port 8080 for heroku
var port = process.env.PORT || 8080;

//body parser needed for post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// to get images to work
app.use(express.static(path.join(__dirname, 'app/public')));

require(path.join(__dirname, 'app/routing/api-routes.js'))(app);
require(path.join(__dirname, 'app/routing/html-routes.js'))(app);

app.listen(port, function() {
	console.log('Listening on port', port);
});