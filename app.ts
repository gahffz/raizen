import express, { NextFunction, Request, Response } from 'express'
import { Express } from 'express'
import { database } from './database'
import { accountRoute } from './routes'

const app: Express = express()
const PORT = process.env.PORT || 5810

database.connect()

app.use('/accounts', accountRoute)

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log("Server started on the PORT: " + PORT)
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        console.log(error)
        res.send("Internal Error")
    }
})