import express from "express"
import { userController } from "../controller"

export const route = express.Router()

route.use(express.json())

route.post('/signup', userController.createAccount)

route.post('/signin', userController.login)