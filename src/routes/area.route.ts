import express from "express"
import { areaController } from "../controllers"
import middleware from "../middlewares"

const route = express.Router()

route.use(express.json())

route.use('/', (req, res, next) => {
    res.contentType('application/json')
    next()
})

route.use(middleware.session)

route.get('/types', areaController.getAreaTypes)

route.get('/types/:id', areaController.getAreaType)

route.post('/types', areaController.addAreaType)

route.put('/types/:id', areaController.updateAreaType)

route.delete('/types/:id', areaController.deleteAreaType)


route.get('/', areaController.getAreas)

route.get('/:id', areaController.getArea)

route.post('/', areaController.createArea)

route.put('/:id', areaController.updateArea)

route.delete('/:id', areaController.deleteArea)

export default route