import { Database } from "../interfaces/database";
import { AreaRepository, AreaTypeRepository, BenchReagentRepository, DesmiRepository, IbcRepository, PureReagentRepository, ReportRepository, SessionRepository, TableRepository, UserRepository, VerificationRepository } from "../interfaces/repositories";
import { AreaMongoRepository, AreaTypeMongoRepository, BenchReagentMongoRepository, DesmiMongoRepository, IbcMongoRepository, PureReagentMongoRepository, ReportMongoRepository, SessionMongoRepository, TableMongoRepository, UserMongoRepository, VerificationMongoRepository } from "./mongoose";

class MongoDatabase implements Database {
    area: AreaRepository = new AreaMongoRepository()
    areaType: AreaTypeRepository = new AreaTypeMongoRepository()
    benchReagent: BenchReagentRepository = new BenchReagentMongoRepository()
    desmi: DesmiRepository = new DesmiMongoRepository()
    ibc: IbcRepository = new IbcMongoRepository()
    pureReagent: PureReagentRepository = new PureReagentMongoRepository()
    report: ReportRepository = new ReportMongoRepository()
    table: TableRepository = new TableMongoRepository()
    user: UserRepository = new UserMongoRepository()
    session: SessionRepository = new SessionMongoRepository()
    verification: VerificationRepository = new VerificationMongoRepository()
}

export {
    MongoDatabase
}