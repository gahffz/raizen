import { SessionRepository, UserRepository, VerificationRepository } from "./repositories";

export interface Database {
    user: UserRepository, 
    session: SessionRepository, 
    verification: VerificationRepository
}