import { AreaRepository, AreaTypeRepository, SessionRepository, UserRepository, VerificationRepository } from "./repositories";

export interface Database {
    area: AreaRepository, 
    areaType: AreaTypeRepository, 
    user: UserRepository, 
    session: SessionRepository, 
    verification: VerificationRepository
}