import express from "express"
import { accountController, adminController } from "../controllers"
import middleware from "../middlewares"

const route = express.Router()

route.use(express.json())

route.use('/', (req, res, next) => {
    res.contentType('application/json')
    next()
})

route.use(middleware.session)

route.put('/accountVerification/update', accountController.verifyAccount)

export default route