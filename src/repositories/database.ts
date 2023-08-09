import { Database } from "../interfaces/database";
import { SessionRepository, UserRepository, VerificationRepository } from "../interfaces/repositories";
import { SessionMongoRepository, UserMongoRepository, VerificationMongoRepository } from "./mongoose";

class MongoDatabase implements Database {
    user: UserRepository = new UserMongoRepository()
    session: SessionRepository = new SessionMongoRepository()
    verification: VerificationRepository = new VerificationMongoRepository()
}

export {
    MongoDatabase
}