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

// function create(req, res) {
//     Flight.findById(req.params.id, function(err, flightDocument){
//         Ticket.create(function(err){

//             res.redirect(`/flights/${flightDocument._id}`)

//         })
//     })
// }




function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {

        console.log(flight, ' <- flight')
        console.log(req.params.id , ' <- req.params.id')
        console.log(req.body, '<- req.body')

        Ticket.create(req.body, function(err, ticket){
            ticket.flight = flight._id;
            ticket.save(function(err){
                console.log(ticket, 'ticket')
                res.redirect(`/flights/${req.params.id}`)
            });
        })  
        


    });
  }
  
