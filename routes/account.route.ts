import express from "express"
import { approvalController, sessionController, userController } from "../controller"

export const route = express.Router()

route.use(express.json())

route.post('/signup', userController.createAccount)

route.post('/signin', userController.login)

route.use(sessionController.validateSession)

route.post('/admin/approval/update', approvalController.approveUser)