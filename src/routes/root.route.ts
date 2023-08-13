import middleware from "../middlewares"
import accounts from "./accounts.route"
import area from "./area.route"
import admin from "./admin.route"
import benchReagent from "./bench-reagent.route"
import pureReagent from "./pure-reagent.route"
import report from "./report.route"
import express from "express"

const route = express.Router()

route.use('/accounts', accounts)

route.use('/admin', admin)

route.use(express.json())

route.use('/', (req, res, next) => {
    res.contentType('application/json')
    next()
})

route.use(middleware.session)

route.use(area)

route.use(benchReagent)

route.use(pureReagent)

route.use(report)

route.use(middleware.error)

export default route