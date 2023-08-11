import { Database } from "../interfaces/database";
import { AreaRepository, AreaTypeRepository, SessionRepository, UserRepository, VerificationRepository } from "../interfaces/repositories";
import { AreaMongoRepository, AreaTypeMongoRepository, SessionMongoRepository, UserMongoRepository, VerificationMongoRepository } from "./mongoose";

class MongoDatabase implements Database {
    area: AreaRepository = new AreaMongoRepository()
    areaType: AreaTypeRepository = new AreaTypeMongoRepository()
    user: UserRepository = new UserMongoRepository()
    session: SessionRepository = new SessionMongoRepository()
    verification: VerificationRepository = new VerificationMongoRepository()
}

export {
    MongoDatabase
}