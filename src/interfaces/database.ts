import { AreaRepository, AreaTypeRepository, BenchReagentRepository, PureReagentRepository, ReportRepository, SessionRepository, UserRepository, VerificationRepository } from "./repositories";

export interface Database {
    area: AreaRepository, 
    areaType: AreaTypeRepository, 
    benchReagent: BenchReagentRepository, 
    pureReagent: PureReagentRepository, 
    report: ReportRepository, 
    session: SessionRepository, 
    user: UserRepository,
    verification: VerificationRepository
}