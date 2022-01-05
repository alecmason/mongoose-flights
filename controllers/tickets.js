const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    create,
    // addTicket
}

function create(req, res) {
    res.render('tickets/new', {
        flight: req.params.id,
        title: 'New Ticket'
    })
}

// function addTicket(req,res){
//     Flight.findById(req.params.id, function(err, movieDocument){

//     })

// }