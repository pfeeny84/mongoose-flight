const Flight = require('../models/flight')
module.exports = {
    new: newFlight,
    create,
    index,
    show
}
function index(req, res){
    Flight.find({}, function(err, flightDocuments){
        // console.log(flightDocuments)
        res.render('flights/index', {
            flights: flightDocuments
        })
    })
}
function newFlight(req, res){
    // const newFlight = new Flight();
    // const dt = newFlight.departs
    // const departsDate = dt.toISOString().slice(0,16);
    
    res.render('flights/new');
}
// function create(req, res) {
//     req.body.nowFlying = !!req.body.nowFlying;
//     let dt = new Flight().departs;
//     if(!req.body.departs){
//         req.body.departs = dt.toString().slice(0,10);
//         // console.log(req.body.departs);

//     }
//     let newDate = req.body.departs.split('-');
//     let correctDate = `${newDate[1]}-${newDate[2]}-${newDate[0]}`
//     req.body.departs = correctDate;
//     // console.log(req.body);
//     // req.body.airline = req.body.airline.replace(/\s*,\s*/g, ',');
//     // if (req.body.airline) req.body.airline = req.body.airline.split(',');
//     const flight = new Flight(req.body);  
//     flight.save(function(err) {
//       if (err) return res.render('flights/new');
//       console.log(flight, ' this is our document that we created in mongodb');
//     //    redirect right back to new.ejs
//       res.redirect('/flights/new');
//     });
//   }

  function create(req, res){
    // console.log(req.body, " this is req body");
    req.body.nowFlying = !!req.body.nowFlying;
    let dt = new Flight().departs;
    // req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
    if(!req.body.departs){
        req.body.departs = dt;
    }
    const flight = new Flight(req.body);
    flight.save(function(err){
        if(err) return res.render("flights/new");
        res.redirect("/flights");
    })
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flightDoc){
        res.render('flights/show', {flight: flightDoc})
    })  
}