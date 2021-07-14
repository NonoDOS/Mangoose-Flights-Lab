import {flight} from "../models/flight.js"

export {
	index,
  show,
  newFlight as new,
  create,

}

function index(req, res) {
  flightDb.find({}, function(error, flights) {
    res.render('flights/index', {
      flights: flights,
      error: error,
      title: "All Flights",
    })
  })
}

function show(req, res) {
    flightDb.findById(req.params.id, function(error, flight) {
      res.render('flights/show', {
        flight: flight,
        error: error
      })
    })
  }

  function newFlight(req, res) {
    res.render("flights/new", {
      title: "Add Flight",
    })
  }

  function create(req, res) {
    // making the checkbox a boolean
    // req.body.nowShowing = !!req.body.nowShowing
    // for (let key in req.body) {
    //   if (req.body[key] === '') delete req.body[key]
    

     // This: 
  // flight.create(req.body, function(err, flight) {
  //   if (err) return res.redirect('/flights/new')
  //   res.redirect('/flights')
  // })

  
    // equals:
    const flight = new Flight(req.body)
    flight.save(function(err) {
       // to handle errors
      if (err) return res.redirect('/flights/new')
      //redirect right back to new.ejs
      res.redirect(`/flights/${flight._id}`)//update this 
      const flightSchema = new mongoose.Schema({
        Airline: {
          type: String, required: true,
          enum: ["American", "Southwest", "United", "Delta","Air Canada","Alaska", "Jet Blue","Hawaiian"]
        },
       Airport:{
          type: String, 
          enum: ["DFW", "DEN", "SFO", "JFK", "SAN", "LAX", "LAS", "DFW", "DCA"]
        },
        FlightNo: {
          type: Number, min: 10, max: 9999
        },
        Depart: {
          type: Number,
          efault: function() {
            return new Date().getDate()
          }
        },
        Tickets:{
          type:[ticketSchema]
        }
      })
    })
  }