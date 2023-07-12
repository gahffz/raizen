import { approvalRepository, sessionRepository, userRepository } from "../repository";
import { validator } from "../utils";
import { ApprovalController } from "./approval.controller";
import { SessionController } from "./session.controller";
import { UserController } from "./user.controller";

const approvalController = new ApprovalController(approvalRepository)
const userController = new UserController(userRepository, validator)
const sessionController = new SessionController(sessionRepository)

export {
    approvalController, 
    userController,
    sessionController
}