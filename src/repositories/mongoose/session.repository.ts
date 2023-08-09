import { Document, Types } from "mongoose";
import { Session } from "../../entities";
import { SessionRepository } from "../../interfaces/repositories";
import { Session as SessionType, SessionModel } from "./models";

export default class SessionMongoRepository implements SessionRepository {
    async getAll(): Promise<Session[]> {
        const documents = await SessionModel.find()
        return documents.map(document => parseNonNull(document))
    }
    async getById(id: any): Promise<Session | null> {
        const document = await SessionModel.findById(id)
        return parseNullable(document)
    }
    async getByToken(token: string): Promise<Session | null> {
        const document = await SessionModel.findOne({ token })
        return parseNullable(document)
    }
    async create(session: Session): Promise<Session> {
        const document = await SessionModel.create(session)
        return parseNonNull(document)
    }
    async updateValidityByToken(token: string, valid: boolean): Promise<Session | null> {
        const document = await SessionModel.findOneAndUpdate({ token }, { valid }, { new: true })
        return parseNullable(document)
    }
    async updateValiditiesByUid(uid: any, valid: boolean): Promise<void> {
        await SessionModel.updateMany({ uid }, { valid }).exec()
    }
    async delete(id: any): Promise<Session | null> {
        const document = await SessionModel.findOneAndDelete(id)
        return parseNullable(document)
    }
}

function parseNullable(document: Document<Types.ObjectId, {}, SessionType> | null): Session | null {
    return document ? parseNonNull(document) : document
}

function parseNonNull(document: Document<Types.ObjectId, {}, SessionType>): Session {
    const obj = document.toObject()
    const { _id, ...rest } = obj
    return {
        id: _id.toString(), 
        ...rest
    }
}