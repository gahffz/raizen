import { Document, Types } from "mongoose";
import { User, UserPersonalInfoUpdate } from "../../entities";
import { User as UserType, UserModel } from "./models";
import { UserRepository } from "../../interfaces/repositories";

export default class UserMongoRepository implements UserRepository {
    async getAll(): Promise<User[]> {
        const documents = await UserModel.find()
        return documents.map(document => parseNonNull(document))
    }
    async getById(id: string): Promise<User | null> {
        const document = await UserModel.findById(id)
        return parseNullable(document)
    }
    async create(user: User): Promise<User> {
        const document = await UserModel.create(user)
        return parseNonNull(document)
    }
    async updatePersonalInfo(id: any, user: UserPersonalInfoUpdate): Promise<User | null> {
        const document = await UserModel.findOneAndUpdate(id, user)
        return parseNullable(document)
    }
    async updateUsername(id: any, username: string): Promise<User | null> {
        const document = await UserModel.findOneAndUpdate(id, { username })
        return parseNullable(document)
    }
    async updatePassword(id: any, password: string): Promise<User | null> {
        const document = await UserModel.findOneAndUpdate(id, { password })
        return parseNullable(document)
    }
    async updateVerification(id: any, verified: boolean): Promise<User | null> {
        const document = await UserModel.findOneAndUpdate(id, { verified })
        return parseNullable(document)
    }
    async delete(id: any): Promise<any> {
        const document = await UserModel.findOneAndDelete(id)
        return parseNullable(document)
    }
}

function parseNonNull(document: Document<Types.ObjectId, {}, UserType>): User {
    const obj = document.toObject()
    const { _id, ...remaining } = obj
    return {
        ...remaining, 
        id: _id.toString()
    }
}

function parseNullable(document: Document<Types.ObjectId, {}, UserType> | null): User | null {
    return document ? parseNonNull(document) : document
}