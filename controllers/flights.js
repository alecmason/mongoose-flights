const Flight = require('../models/flight');

module.exports = {
    index
}

function index(req, res){
    Flight.find({}, function(err, flightDocuments){


		// respond to the client after the db query
		// res.render
		// aka inside the callback function
		console.log(flightDocuments, ' <- flightDocuments')
		res.render('flights/index', {
			name: 'Alec',
			flights: Documents
			// Key
			// movies <- is the name of the variable we are injecting
			// into movies/index

		})
	})	
}