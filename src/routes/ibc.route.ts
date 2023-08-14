import express from "express"
import { ibcController } from "../controllers"

const route = express.Router()

route.get('/ibc', ibcController.getAll)

route.get('/ibc/:id', ibcController.getById)

route.post('/ibc', ibcController.create)

route.put('/ibc/:id', ibcController.update)

route.delete('/ibc/:id', ibcController.delete)

export default route