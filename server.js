const { setupCircuitBreaker } = require("./setupCircuitBreaker");

var express = require('express'),
  	app = express(),
	port = process.env.PORT || 3000;
	bodyParser = require('body-parser');

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	var routes = require('./api/routes/calcRoutes'); //importing route
	routes(app); //register the route

	app.listen(port);

	// circuit breaker
	const circuit = setupCircuitBreaker();

	app.use('/', (request, response) => {
	    circuit.fire().then(result => {
	        response.send(result);
	    }).catch(err => {
	        response.send(err.message);
	    });
	});

	app.use(function(req, res) {
	  res.status(404).send({url: req.originalUrl + ' not found'})
	});

console.log('todo list RESTful API server started on: ' + port);