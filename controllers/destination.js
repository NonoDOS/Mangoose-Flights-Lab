import { Destination } from "../models/Destination.js"


export {
  newDestination as new,
  create,
}

function newDestination(req, res) {
  Destination.find({}, function(err, Destinations) {
    res.render("Destinations/new", {
      title: "Add Destination",
      Destinations: Destinations,
    })
  })
}

function create(req, res) {
  Destination.create(req.body, function(err, Destination){
    res.redirect('/Destinations/new')
  })
}