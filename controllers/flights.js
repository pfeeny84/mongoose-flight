const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
module.exports = {
    create,
    index,
    show,
    delete: deleteFlight,
    newFlight
}

function deleteFlight(req,res) {
    Flight.findByIdAndDelete(req.params.id, function(){
        res.redirect('/flights');

    });
    
}

function index(req, res){
    Flight.find({}, function(err, flightDocuments){
        res.render('flights/index', {
            flights: flightDocuments
        })
    })
}

function newFlight(req, res){
    
    res.render('flights/new')
}
  
function create(req, res){
    
    req.body.nowFlying = !!req.body.nowFlying;
    let dt = new Flight().departs;
    if(!req.body.departs){
        req.body.departs = dt;
    }
    const flight = new Flight(req.body);
    flight.save(function(err){
        if(err) {
            return res.render("flights/new");
        }   
        else {
            console.log('this is a place')
            res.redirect("/flights");
        }
            
        })
}
function show(req, res){
    Flight.findById(req.params.id, function(err, flightDoc){
        Ticket.find({flight: flightDoc._id}, function(err, tickets) {
        console.log(flightDoc);
        res.render('flights/show', {flight: flightDoc, ticket:tickets})
    });
});  
}
