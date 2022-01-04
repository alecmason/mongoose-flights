const Flight = require('../models/flight');

module.exports = {
    create
}

function create(req, res) {
    console.log(req.params.id, " req.params.id")
    console.log(req.body, " req.body aka the contents of the form")

    Flight.findById(req.params.id, function (err, flightDocument) {

        flightDocument.destinations.push(req.body);

        flightDocument.save(function(err){
			// redirect the user back to the show page

			res.redirect(`/flights/${flightDocument._id}`)
		})
    })
}