import {Flight} from "../models/flight.js"
import {Destination} from "../models/destination.js"

export {
	index,
  show,
  newFlight as new,
  create,
  createTicket,
  addDestination,

}
function addDestination(req,res){
  Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body.destinationId)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}


function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight){
    console.log(req.body, "req.body")
    console.log(flight, "before push")
    flight.tickets.push(req.body)
    console.log(flight, "after push")
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function index(req, res) {
  Flight.find({}, function(error, flights) {
    res.render('flights/index', {
      flights: flights,
      error: error,
      title: "All Flights",
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate("destinations")
  .exec(function(err, flight){
    Destination.find({_id: {$nin: flight.destinations}}, function(err, destNotInDests) {
      res.render("flights/show", {
        title: "flight Detail",
        flight: flight,
        err: err,
        destNotInDests: destNotInDests
      })
    })
  })
}


  function newFlight(req, res) {
    res.render("flights/new", {
      title: "Add Flight",
    })
  }

  function create(req, res) {
    // equals:
    const flight = new Flight(req.body)
    flight.save(function(err) { 
      // to handle errors
      console.log(err)
      if (err) return res.redirect('/flights/new')
      //redirect right back to new.ejs
      res.redirect(`/flights/${flight._id}`)//update this 
    })
  }
   