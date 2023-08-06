import express from "express"
import { adminController } from "../controllers"

const route = express.Router()

route.use(express.json())

route.use('/', (req, res, next) => {
    res.contentType('application/json')
    next()
})

route.put('/accountVerification/update', adminController.verifyAccount)

export default route