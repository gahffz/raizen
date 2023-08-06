import { sessionService, userService, verificationService } from "../services";
import AdminController from "./admin.controller";
import UserController from "./user.controller";

const adminController = new AdminController(userService, verificationService)
const userController = new UserController(userService, sessionService, verificationService)

export {
    adminController, 
    userController
}