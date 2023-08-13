import { Database } from "../interfaces/database";
import { AreaRepository, AreaTypeRepository, BenchReagentRepository, PureReagentRepository, ReportRepository, SessionRepository, UserRepository, VerificationRepository } from "../interfaces/repositories";
import { AreaMongoRepository, AreaTypeMongoRepository, BenchReagentMongoRepository, PureReagentMongoRepository, ReportMongoRepository, SessionMongoRepository, UserMongoRepository, VerificationMongoRepository } from "./mongoose";

class MongoDatabase implements Database {
    area: AreaRepository = new AreaMongoRepository()
    areaType: AreaTypeRepository = new AreaTypeMongoRepository()
    benchReagent: BenchReagentRepository = new BenchReagentMongoRepository()
    pureReagent: PureReagentRepository = new PureReagentMongoRepository()
    report: ReportRepository = new ReportMongoRepository()
    user: UserRepository = new UserMongoRepository()
    session: SessionRepository = new SessionMongoRepository()
    verification: VerificationRepository = new VerificationMongoRepository()
}

export {
    MongoDatabase
}