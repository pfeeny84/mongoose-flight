const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
module.exports= {
    create,
    show
}

function create(req, res){
    console.log('button clicked');
    console.log(req.body);
    Flight.findById(req.params.id, function(err,flight){
        const ticket = new Ticket(req.body);
        ticket.flight = flight.id;
        console.log(ticket);
        ticket.save(function(err){
            res.redirect(`/flights/${req.params.id}`)
        });
    });
    
}



function show(req, res){
    Flight.findById(req.params.id, function(err, flightDoc){
        console.log(flightDoc);
        res.render('flights/tickets', {flight: flightDoc})
    })  
}
