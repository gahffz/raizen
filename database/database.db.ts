import mongoose from "mongoose"

export interface Database {
    connect(): void
}

export class MongoDb implements Database {
    connect(): void {
        const uri = 'mongodb+srv://dbAdmin:Bothilli2021@beta.cvbfl.mongodb.net/v2raizen'
        mongoose.connect(uri, {
            ssl: true,
        })
        .then((db) => {
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
}