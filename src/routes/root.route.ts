import accounts from "./accounts.route"
import express from "express"

const route = express.Router()

route.use('/accounts', accounts)

export default route