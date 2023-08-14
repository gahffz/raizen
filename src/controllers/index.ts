import { accountService, areaService, benchReagentService, desmiService, ibcService, pureReagentService, reportService, sessionService, tableService, userService, verificationService } from "../services";
import AccountController from "./account.controller";
import AdminController from "./admin.controller";
import AreaController from "./area.controller";
import BenchReagentController from "./bench-reagent.controller";
import DesmiController from "./desmi.controller";
import IbcController from "./ibc.controller";
import PureReagentController from "./pure-reagent.controller";
import ReportController from "./report.controller";
import TableController from "./table.controller";
import UserController from "./user.controller";

const accountController = new AccountController(accountService)
const adminController = new AdminController(userService, verificationService)
const areaController = new AreaController(areaService)
const benchReagentController = new BenchReagentController(benchReagentService)
const desmiController = new DesmiController(desmiService)
const ibcController = new IbcController(ibcService)
const pureReagentController = new PureReagentController(pureReagentService)
const reportController = new ReportController(reportService)
const tableController = new TableController(tableService)
const userController = new UserController(userService, sessionService, verificationService)

export {
    accountController, 
    adminController, 
    areaController, 
    benchReagentController, 
    desmiController, 
    ibcController, 
    pureReagentController, 
    reportController, 
    tableController, 
    userController
}