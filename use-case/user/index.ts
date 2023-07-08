import { UserDao } from "../../dao/user.dao";
import { createApprovalUseCase } from "../approval";
import { createSessionUseCase } from "../session";
import { CreateUser } from "./create-user";
import { LoginUseCase } from "./login";

const createUserUseCase = new CreateUser(new UserDao(), createSessionUseCase, createApprovalUseCase)
const loginUseCase = new LoginUseCase(new UserDao(), createSessionUseCase)

export {
    createUserUseCase,
    loginUseCase
}