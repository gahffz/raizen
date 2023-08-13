import express from "express"
import { benchReagentController } from "../controllers"

const route = express.Router()

route.get('/reagent/bench', benchReagentController.getAll)

route.get('/reagent/bench/:id', benchReagentController.getById)

route.post('/reagent/bench', benchReagentController.create)

route.put('/reagent/bench/:id', benchReagentController.update)

route.delete('/reagent/bench/:id', benchReagentController.delete)

export default route