import { Document, Types } from "mongoose";
import { Desmi } from "../../entities";
import { DesmiRepository } from "../../interfaces/repositories";
import { Desmi as TDesmi, DesmiModel } from "./models";

export default class DesmiMongoRepository implements DesmiRepository {
    async getAll(): Promise<Desmi[]> {
        const documents = await DesmiModel.find()
        return documents.map(document => parse(document))
    }
    async getById(id: any): Promise<Desmi | null> {
        const document = await DesmiModel.findById(id)
        return document ? parse(document) : document
    }
    async create(desmi: Desmi): Promise<Desmi> {
        const document = await DesmiModel.create(desmi)
        return parse(document)
    }
    async update(id: any, desmi: Desmi): Promise<Desmi | null> {
        const document = await DesmiModel.findByIdAndUpdate(id, desmi, { new: true })
        return document ? parse(document) : document
    }
    async delete(id: any): Promise<any> {
        const document = await DesmiModel.findByIdAndDelete(id)
        return document ? parse(document) : document
    }
}

function parse(document: Document<Types.ObjectId, {}, TDesmi>): Desmi {
    const { _id, uid, ...rest } = document.toObject({ versionKey: false })
    return {
        id: _id.toString(), 
        uid: uid.toString(), 
        ...rest
    }
}