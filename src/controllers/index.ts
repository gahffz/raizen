import { accountService, areaService, reportService, sessionService, userService, verificationService } from "../services";
import AccountController from "./account.controller";
import AdminController from "./admin.controller";
import AreaController from "./area.controller";
import ReportController from "./report.controller";
import UserController from "./user.controller";

const accountController = new AccountController(accountService)
const adminController = new AdminController(userService, verificationService)
const areaController = new AreaController(areaService)
const reportController = new ReportController(reportService)
const userController = new UserController(userService, sessionService, verificationService)

export {
    accountController, 
    adminController, 
    areaController, 
    reportController, 
    userController
}