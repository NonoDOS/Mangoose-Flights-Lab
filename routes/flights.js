import { Router } from 'express'

const router = Router()

import * as flightsCtrl from '../controllers/flights.js'


router.get('/', flightsCtrl.index)
router.get("/new", flightsCtrl.new)
router.get("/:id", flightsCtrl.show)
router.post("/", flightsCtrl.create)
router.post("/:id/tickets", flightsCtrl.createTicket)
router.post("/:id/destination", flightsCtrl.addDestination)
router.delete("/:id",flightsCtrl.deleteFlight)
router.delete("/:flightId:ticketsId",flightsCtrl.deleteTicket)

export {
  router
}


