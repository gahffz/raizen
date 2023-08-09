import express from "express"
import { accountController } from "../controllers"
import middleware from "../middlewares"

const route = express.Router()

route.use(express.json())

route.use('/', (req, res, next) => {
    res.contentType('application/json')
    next()
})

route.post('/signup', accountController.signup)

route.post('/signin', accountController.signin)

route.use(middleware.session)

route.post('/signout', accountController.signout)

route.get('/verify', accountController.getAccountVerification)

export default route