import { Database } from "../interfaces/database";
import { UserRepository } from "../interfaces/repositories";
import UserMongoRepository from "./mongoose/user.repository";

class MongoDatabase implements Database {
    user: UserRepository = new UserMongoRepository()
}

export {
    MongoDatabase
}