const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
	index,
	new: newFlight,
	create,
	show
}

function index(req, res) {
	Flight.find({}, function (err, flightDocuments) {
		console.log(flightDocuments, ' <- flightDocuments')
		res.render('flights/index', {
			title: 'Flights',
			flightDocuments
		})
	})
}

function newFlight(req, res) {
	res.render('flights/new', {
		title: 'New Flight'
	});
}

function create(req, res) {
	let a = req.body.departs;
	console.log(a, '<- a')
	let b = req.body.departs.substring(0, 4);
	console.log(b, '<- b')
	let c = parseInt(b) + 1;
	let d = c.toString()
	let e = `${d}${req.body.departs.slice(4)}`

	console.log(e, '<- e')

	let f = {
		airline: req.body.airline,
		airport: req.body.airport,
		flightNo: req.body.flightNo,
		departs: e
	}

	console.log(f, '<- f')

	Flight.create(f, function (err, flightDocuments) {
		res.redirect('/flights');
	})
}

function show(req, res){
	Flight.findById(req.params.id, function(err, flight) {
		console.log(flight, '<- flight')
		console.log(flight._id, '<- flight._id')

		Ticket.find({flight: flight._id}, function(err, tickets) {
			console.log(tickets, '<- tickets')
            res.render('flights/show', {
                title: 'Flight Details', 
                flight,
                tickets
            });

        })
    });
}