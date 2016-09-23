var path = require('path');

var friends = require(path.join(__dirname, '../data/friends.js'));

module.exports = function(app) {

	// Returns everyone in the api
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Looks for specific user, or returns error
	app.get('/api/:name', function(req, res) {
		var name = req.params.name;
		for(var i = 0; i < friends.length; i++) {
			if(friends[i].name === name) {
				res.json(friends[i]);
			}
		}
		res.end('User not found');
	});

	// Adds new user to friends array
	app.post('/api/new', function(req, res) {
		var user = req.body;
		friends.push(user);
		res.end('New user added <br>', JSON.stringify(user));
	});
}