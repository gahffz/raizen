import { Database } from "../interfaces/database";
import { AreaRepository, AreaTypeRepository, ReportRepository, SessionRepository, UserRepository, VerificationRepository } from "../interfaces/repositories";
import { AreaMongoRepository, AreaTypeMongoRepository, ReportMongoRepository, SessionMongoRepository, UserMongoRepository, VerificationMongoRepository } from "./mongoose";

class MongoDatabase implements Database {
    area: AreaRepository = new AreaMongoRepository()
    areaType: AreaTypeRepository = new AreaTypeMongoRepository()
    report: ReportRepository = new ReportMongoRepository()
    user: UserRepository = new UserMongoRepository()
    session: SessionRepository = new SessionMongoRepository()
    verification: VerificationRepository = new VerificationMongoRepository()
}

export {
    MongoDatabase
}