import { SessionRepository, UserRepository } from "./repositories";

export interface Database {
    user: UserRepository, 
    session: SessionRepository
}