import accounts from "./accounts.route"
import admin from "./admin.route"
import express from "express"

const route = express.Router()

route.use('/accounts', accounts)

route.use('/admin', admin)

export default route