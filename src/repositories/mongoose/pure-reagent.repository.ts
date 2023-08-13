import { Document, Types } from "mongoose";
import { PureReagent } from "../../entities";
import { PureReagentRepository } from "../../interfaces/repositories";
import { PureReagent as TPureReagent, PureReagentModel } from "./models";

export default class PureReagentMongoRepository implements PureReagentRepository {
    async getAll(): Promise<PureReagent[]> {
        const documents = await PureReagentModel.find()
        return documents.map(document => parse(document))
    }
    async getById(id: any): Promise<PureReagent | null> {
        const document = await PureReagentModel.findById(id)
        return document ? parse(document) : document
    }
    async create(pureReagent: PureReagent): Promise<PureReagent> {
        const document = await PureReagentModel.create(pureReagent)
        return parse(document)
    }
    async update(id: any, pureReagent: PureReagent): Promise<PureReagent | null> {
        const document = await PureReagentModel.findByIdAndUpdate(id, pureReagent, { new: true })
        return document ? parse(document) : document
    }
    async delete(id: any): Promise<any> {
        const document = await PureReagentModel.findByIdAndDelete(id)
        return document ? parse(document) : document
    }
}

function parse(document: Document<Types.ObjectId, {}, TPureReagent & { __v: number }>): PureReagent {
    const { _id, uid, __v, ...rest } = document.toObject()
    return {
        id: _id.toString(), 
        uid: uid.toString(), 
        ...rest
    }
}