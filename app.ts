import express, { NextFunction, Request, Response } from 'express'
import { Express } from 'express'
import { database } from './database'
import { accountRoute } from './routes'
import { HttpError } from './utils'

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
    if(error instanceof SyntaxError && 'body' in error) {
        res.status(400).json({ message: 'Malformed JSON' })
        return
    }

    if (error instanceof HttpError) {
        res.status(error.status)
        res.send(error.message)
        return
    }

    if (error) {
        console.log(error)
        res.status(400).json({ message: "Internal Error"})
        return
    }
})