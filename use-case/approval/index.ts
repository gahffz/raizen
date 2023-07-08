import { ApprovalDao } from "../../dao/approval.dao"
import { CreateApprovalUseCase } from "./create-approval"

const createApprovalUseCase = new CreateApprovalUseCase(new ApprovalDao())

export {
    createApprovalUseCase
}