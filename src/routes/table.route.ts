import express from "express"
import { tableController } from "../controllers"

const route = express.Router()

route.get('/table', tableController.getAll)

route.get('/table/:id', tableController.getById)

route.post('/table', tableController.create)

route.put('/table/:id', tableController.update)

route.delete('/table/:id', tableController.delete)

export default route