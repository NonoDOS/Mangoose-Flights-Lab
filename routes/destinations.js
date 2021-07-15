import { Router } from "express"
import * as destinationsCtrl from "../controllers/destinations.js"

export {
  router
}

const router = Router()

//localhost:3000/destinations/new
router.get("/new", destinationsCtrl.new)
//localhost:3000/destinations
router.post("/", destinationsCtrl.create)