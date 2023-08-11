import { Document, Types } from "mongoose";
import { AreaType } from "../../entities";
import { AreaTypeRepository } from "../../interfaces/repositories";
import { AreaType as TAreaType, AreaTypeModel } from "./models";

export default class AreaTypeMongoRepository implements AreaTypeRepository {
    async getAll(): Promise<AreaType[]> {
        const documents = await AreaTypeModel.find()
        return documents.map(document => parseNonNull(document))
    }
    async getById(id: any): Promise<AreaType | null> {
        const document = await AreaTypeModel.findById(id)
        return parseNullable(document)
    }
    async create(areaType: AreaType): Promise<AreaType> {
        const document = await AreaTypeModel.create(areaType)
        return parseNonNull(document)
    }
    async update(id: any, areaType: AreaType): Promise<AreaType | null> {
        const document = await AreaTypeModel.findByIdAndUpdate(id, areaType, { new: true })
        return parseNullable(document)
    }
    async delete(id: any): Promise<AreaType | null> {
        const document = await AreaTypeModel.findByIdAndDelete(id)
        return parseNullable(document)
    }
}

function parseNullable(document: Document<Types.ObjectId, {}, TAreaType> | null): AreaType | null {
    return document ? parseNonNull(document) : document
}

function parseNonNull(document: Document<Types.ObjectId, {}, TAreaType>): AreaType {
    const { _id, ...rest } = document.toObject()
    return {
        id: _id.toString(), 
        ...rest
    }
}