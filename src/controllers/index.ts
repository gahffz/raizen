import { accountService, areaService, sessionService, userService, verificationService } from "../services";
import AccountController from "./account.controller";
import AdminController from "./admin.controller";
import AreaController from "./area.controller";
import UserController from "./user.controller";

const accountController = new AccountController(accountService)
const areaController = new AreaController(areaService)
const adminController = new AdminController(userService, verificationService)
const userController = new UserController(userService, sessionService, verificationService)

export {
    accountController, 
    areaController, 
    adminController, 
    userController
}