import { Database } from "../interfaces/database";
import { SessionRepository, UserRepository } from "../interfaces/repositories";
import { SessionMongoRepository, UserMongoRepository } from "./mongoose";

class MongoDatabase implements Database {
    user: UserRepository = new UserMongoRepository()
    session: SessionRepository = new SessionMongoRepository()
}

export {
    MongoDatabase
}