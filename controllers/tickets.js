const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    console.log(req.params.id, "<- req.params.id")
    res.render('tickets/new', {
        flight: req.params.id,
        title: 'New Ticket'
    })
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.create(req.body, function(err, ticket){
            ticket.flight = flight._id;
            ticket.save(function(err){
                res.redirect(`/flights/${req.params.id}`)
            });
        })  
    });
  }
  
