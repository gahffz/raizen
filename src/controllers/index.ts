import { accountService, areaService, benchReagentService, pureReagentService, reportService, sessionService, userService, verificationService } from "../services";
import AccountController from "./account.controller";
import AdminController from "./admin.controller";
import AreaController from "./area.controller";
import BenchReagentController from "./bench-reagent.controller";
import PureReagentController from "./pure-reagent.controller";
import ReportController from "./report.controller";
import UserController from "./user.controller";

const accountController = new AccountController(accountService)
const adminController = new AdminController(userService, verificationService)
const areaController = new AreaController(areaService)
const benchReagentController = new BenchReagentController(benchReagentService)
const pureReagentController = new PureReagentController(pureReagentService)
const reportController = new ReportController(reportService)
const userController = new UserController(userService, sessionService, verificationService)

export {
    accountController, 
    adminController, 
    areaController, 
    benchReagentController, 
    pureReagentController, 
    reportController, 
    userController
}