import { userRepository } from "../repository";
import { validator } from "../utils";
import { UserController } from "./user.controller";

const userController = new UserController(userRepository, validator)

export {
    userController
}