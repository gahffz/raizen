import { Document, Types } from "mongoose";
import { Ibc } from "../../entities";
import { IbcRepository } from "../../interfaces/repositories";
import { Ibc as TIbc, IbcModel } from "./models";

export default class IbcMongoRepository implements IbcRepository {
    async getAll(): Promise<Ibc[]> {
        const documents = await IbcModel.find()
        return documents.map(document => parse(document))
    }
    async getById(id: any): Promise<Ibc | null> {
        const document = await IbcModel.findById(id)
        return document ? parse(document) : document
    }
    async create(ibc: Ibc): Promise<Ibc> {
        const document = await IbcModel.create(ibc)
        return parse(document)
    }
    async update(id: any, ibc: Ibc): Promise<Ibc | null> {
        const document = await IbcModel.findByIdAndUpdate(id, ibc, { new: true })
        return document ? parse(document) : document
    }
    async delete(id: any): Promise<any> {
        const document = await IbcModel.findByIdAndDelete(id)
        return document ? parse(document) : document
    }
}

function parse(document: Document<Types.ObjectId, {}, TIbc>): Ibc {
    const { _id, uid, ...rest } = document.toObject({ versionKey: false })
    return {
        id: _id.toString(), 
        uid: uid.toString(), 
        ...rest
    }
}