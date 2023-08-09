import { MongoDb } from "./database.db";

const mongoDb = new MongoDb()

export {
    mongoDb as database
}