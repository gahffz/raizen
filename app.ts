import express from "express";
import config from "./config";
import route from "./src/routes/root.route";
import { connectMongoDb } from "./database";

const app = express()

app.use('/', route)

app.listen(config.port, () => {
    console.log('Server started on the port ' + config.port)
})

if (config.database === 'mongo') {
    connectMongoDb()
}