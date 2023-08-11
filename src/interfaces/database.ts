import { AreaRepository, AreaTypeRepository, ReportRepository, SessionRepository, UserRepository, VerificationRepository } from "./repositories";

export interface Database {
    area: AreaRepository, 
    areaType: AreaTypeRepository, 
    report: ReportRepository, 
    session: SessionRepository, 
    user: UserRepository,
    verification: VerificationRepository
}