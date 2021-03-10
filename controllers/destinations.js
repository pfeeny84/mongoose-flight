const Flight = require('../models/flight')
module.exports= {
    create
}

function create(req, res){
    console.log('button clicked')
    Flight.findById(req.params.id, function(err,flight){
        flight.destinations.push(req.body)
        console.log(flight.destinations)
        console.log(req.body)
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
    
}
// const Flight = require('../models/flight');


// module.exports = {
//     create
// }

// async function create(req, res){
//     try{
//         const flight = await Flight.findById(req.params.id)
//         flight.destinations.push(req.body);
//         await flight.save()
//         res.redirect(`/flights/${flight._id}`);

//     } catch(err){
//         res.send(err)
        

//     }
// }