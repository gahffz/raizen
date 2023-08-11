import express from "express"
import { reportController } from "../controllers"

const route = express.Router()

route.get('/report', reportController.getAll)

route.get('/report/:id', reportController.getById)

route.post('/report', reportController.create)

route.put('/report/:id', reportController.update)

route.delete('/report/:id', reportController.delete)

export default route