import express from "express"
import { desmiController } from "../controllers"

const route = express.Router()

route.get('/desmi', desmiController.getAll)

route.get('/desmi/:id', desmiController.getById)

route.post('/desmi', desmiController.create)

route.put('/desmi/:id', desmiController.update)

route.delete('/desmi/:id', desmiController.delete)

export default route