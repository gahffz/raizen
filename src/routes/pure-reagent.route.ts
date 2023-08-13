import express from "express"
import { pureReagentController } from "../controllers"

const route = express.Router()

route.get('/reagent/pure', pureReagentController.getAll)

route.get('/reagent/pure/:id', pureReagentController.getById)

route.post('/reagent/pure', pureReagentController.create)

route.put('/reagent/pure/:id', pureReagentController.update)

route.delete('/reagent/pure/:id', pureReagentController.delete)

export default route