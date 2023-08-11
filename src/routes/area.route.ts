import express from "express"
import { areaController } from "../controllers"

const route = express.Router()

route.get('/area/types', areaController.getAreaTypes)

route.get('/area/types/:id', areaController.getAreaType)

route.post('/area/types', areaController.addAreaType)

route.put('/area/types/:id', areaController.updateAreaType)

route.delete('/area/types/:id', areaController.deleteAreaType)


route.get('/area/', areaController.getAreas)

route.get('/area/:id', areaController.getArea)

route.post('/area/', areaController.createArea)

route.put('/area/:id', areaController.updateArea)

route.delete('/area/:id', areaController.deleteArea)

export default route