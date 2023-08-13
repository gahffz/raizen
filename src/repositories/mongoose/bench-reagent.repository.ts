import { Document, Types } from "mongoose";
import { BenchReagent } from "../../entities";
import { BenchReagentRepository } from "../../interfaces/repositories";
import { BenchReagent as TBenchReagent, BenchReagentModel } from "./models";

export default class BenchReagentMongoRepository implements BenchReagentRepository {
    async getAll(): Promise<BenchReagent[]> {
        const documents = await BenchReagentModel.find()
        return Promise.all(documents.map(document => parse(document)))
    }
    async getById(id: any): Promise<BenchReagent | null> {
        const document = await BenchReagentModel.findById(id)
        return document ? parse(document) : document
    }
    async create(benchReagent: BenchReagent): Promise<BenchReagent> {
        const document = await BenchReagentModel.create(benchReagent)
        return parse(document)
    }
    async update(id: any, benchReagent: BenchReagent): Promise<BenchReagent | null> {
        const document = await BenchReagentModel.findByIdAndUpdate(id, benchReagent, { new: true })
        return document ? parse(document) : document
    }
    async delete(id: any): Promise<any> {
        const document = await BenchReagentModel.findByIdAndDelete(id)
        return document ? parse(document) : document
    }
}

function parse(document: Document<Types.ObjectId, {}, TBenchReagent>): BenchReagent {
    var { _id, uid, components, ...rest } = document.toObject({ versionKey: false })
    
    const componentsParse = () => {
        return components.map(component => {
            const { _id, __v, ...rest } = component.toObject()
            return rest
        })
    }

    return {
        id: _id.toString(), 
        uid: uid.toString(),
        components: componentsParse(), 
        ...rest
    }
}