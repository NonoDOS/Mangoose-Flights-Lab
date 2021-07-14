import { Router } from 'express'
import * as flightDb from '../data/flight-db.js'
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()


router.get('/', flightsCtrl.index)

router.get("/new", flightsCtrl.new)

router.get("/:id", flightsCtrl.show)

router.post("/", flightsCtrl.create)

app.get('/flights', function(req, res) {
  flightDb.find({}, function(error, flights) {
    res.render('flights/index', {
      flights: flights,
      error: error
    })
  })
})
export {
  router
}


