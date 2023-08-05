import { sessionService, userService } from "../services";
import UserController from "./user.controller";

const userController = new UserController(userService, sessionService)

export {
    userController
}