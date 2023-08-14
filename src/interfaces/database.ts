import { AreaRepository, AreaTypeRepository, BenchReagentRepository, DesmiRepository, IbcRepository, PureReagentRepository, ReportRepository, SessionRepository, TableRepository, UserRepository, VerificationRepository } from "./repositories";

export interface Database {
    area: AreaRepository, 
    areaType: AreaTypeRepository, 
    benchReagent: BenchReagentRepository, 
    desmi: DesmiRepository, 
    ibc: IbcRepository, 
    pureReagent: PureReagentRepository, 
    report: ReportRepository, 
    session: SessionRepository, 
    table: TableRepository, 
    user: UserRepository,
    verification: VerificationRepository
}