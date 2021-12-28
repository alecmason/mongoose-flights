const Flight = require('../models/flight');

module.exports = {
	index,
	new: newFlight,
	create
}

function index(req, res) {
	Flight.find({}, function (err, flightDocuments) {

		// respond to the client after the db query
		// res.render
		// aka inside the callback function
		console.log(flightDocuments, ' <- flightDocuments')
		res.render('flights/index', {
			flightDocuments
		})
	})
}

function newFlight(req, res) {
	res.render('flights/new');
}

function create(req, res) {
	Flight.create(req.body, function (err, flightDocuments) {
		res.redirect('/flights');
	})
}