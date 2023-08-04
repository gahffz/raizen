import config from "../../config"
import { Database } from "../interfaces/database"
import { MongoDatabase } from "./database"

let database: Database

if (config.database === 'mongo') {
    database = new MongoDatabase()
} else {
    throw Error('Database does not exists')
}

export default database