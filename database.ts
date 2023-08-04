import mongoose from "mongoose";

export function connectMongoDb(): void {
    const uri = 'mongodb+srv://dbAdmin:Bothilli2021@beta.cvbfl.mongodb.net/v2raizen'
    mongoose.connect(uri, {
        ssl: true,
    })
    .then((db) => {
        console.log('Database connected')
        
        db.connection.on('connecting', () => {
            console.log('Trying connect to mongo database...')
        })
        db.connection.on('connected', () => {
            console.log('Mongo databse connected successfully')
        })
        db.connection.on('disconnecting', () => {
            console.log('Disconnecting mongo database...')
        })
        db.connection.on('disconnected', () => {
            console.log('Mongo database disconnected')
        })
        db.connection.on('reconnected', () => {
            console.log('Mongo database reconnected successfully')
        })
    })
    .catch((error) => {
        console.error(error)
    })
}