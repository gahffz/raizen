import { approveUseCase, createUserUseCase, loginUseCase, validateSessionUseCase } from "../use-case";
import { ApprovalRepository } from "./approval.repository";
import { SessionRepository } from "./session.repository";
import { UserRepository } from "./user.repository";

const userRepository = new UserRepository(createUserUseCase, loginUseCase)
const approvalRepository = new ApprovalRepository(approveUseCase)
const sessionRepository = new SessionRepository(validateSessionUseCase)

export {
    approvalRepository, 
    userRepository, 
    sessionRepository
}