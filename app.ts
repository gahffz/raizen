import express from 'express'
import { Express } from 'express'

const app: Express = express()
const PORT = process.env.PORT || 5810

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log("Server started on the PORT: " + PORT)
})