/**
* Module dependencies.
*/
var config = require('./config'),
	routes = require(config.controller);

module.exports = function(app) {
	//Home route
	app.get('/', routes.index);

	// This routes any angular partials to the server directory. Not the Public. Comment or remove this line to handle the partials on the client side.
	app.get('/views/partials/:name', routes.partials);

	// redirect all others to the index (HTML5 history). Remove this if you don't want Angular to handle all routes.
	app.get('*', routes.index);
};
