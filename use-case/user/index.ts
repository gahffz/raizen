import { UserDao } from "../../dao/user.dao";
import { createApprovalUseCase } from "../approval";
import { createSessionUseCase } from "../session";
import { CreateUser } from "./create-user";

const createUserUseCase = new CreateUser(
    new UserDao(), 
    createSessionUseCase, 
    createApprovalUseCase
)

export {
    createUserUseCase
}