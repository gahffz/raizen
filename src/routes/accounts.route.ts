import express from "express"
import { userController } from "../controllers"

const route = express.Router()

route.use(express.json())

route.use('/', (req, res, next) => {
    res.contentType('application/json')
    next()
})

route.post('/signup', userController.siginup)

export default route