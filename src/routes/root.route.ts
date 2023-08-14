import middleware from "../middlewares"
import accounts from "./accounts.route"
import area from "./area.route"
import admin from "./admin.route"
import benchReagent from "./bench-reagent.route"
import desmi from "./desmi.route"
import ibc from "./ibc.route"
import pureReagent from "./pure-reagent.route"
import report from "./report.route"
import table from "./table.route"
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

route.use(desmi)

route.use(ibc)

route.use(pureReagent)

route.use(report)

route.use(table)

route.use(middleware.error)

export default route