import { ApprovalDao, UserDao } from "../../dao"
import { ApproveUserUseCase } from "./approve-user"
import { CreateApprovalUseCase } from "./create-approval"

const approveUseCase = new ApproveUserUseCase(new UserDao(), new ApprovalDao())
const createApprovalUseCase = new CreateApprovalUseCase(new ApprovalDao())

export {
    approveUseCase,
    createApprovalUseCase
}