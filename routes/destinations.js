import { Router } from "express"
import * as performersCtrl from "../controllers/performers.js"

export {
  router
}

const router = Router()

//localhost:3000/performers/new
router.get("/new", performersCtrl.new)
//localhost:3000/performers
router.post("/", performersCtrl.create)