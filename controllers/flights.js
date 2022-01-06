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
	let b = req.body.departs.substring(0, 4);
	let c = parseInt(b) + 1;
	let d = c.toString()
	let e = `${d}${req.body.departs.slice(4)}`
	let f = {
		airline: req.body.airline,
		airport: req.body.airport,
		flightNo: req.body.flightNo,
		departs: e
	}
	Flight.create(f, function (err, flightDocuments) {
		res.redirect('/flights');
	})
}

function show(req, res){
	Flight.findById(req.params.id, function(err, flight) {
		Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {
                title: 'Flight Details', 
                flight,
                tickets
            });

        })
    });
}