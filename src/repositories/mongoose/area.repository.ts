import { Document, Types } from "mongoose";
import { Area, AreaFile } from "../../entities";
import { AreaRepository } from "../../interfaces/repositories";
import { Area as TArea, AreaModel, AreaFile as TAreaFile } from "./models";

export default class AreaMongoRepository implements AreaRepository {
    async getAll(): Promise<Area[]> {
        const documents = await AreaModel.find()
        return Promise.all(documents.map(document => parseNonNull(document)))
    }
    async getById(id: any): Promise<Area | null> {
        const document = await AreaModel.findById(id)
        return parseNullable(document)
    }
    async create(area: Area): Promise<Area> {
        const document = await AreaModel.create(area)
        return parseNonNull(document)
    }
    async update(id: any, area: Area): Promise<Area | null> {
        const document = await AreaModel.findByIdAndUpdate(id, area, { new: true })
        return parseNullable(document)
    }
    async delete(id: any): Promise<any> {
        const document = await AreaModel.findByIdAndDelete(id)
        return parseNullable(document)
    }
}

function parseNullable(document: Document<Types.ObjectId, {}, TArea & { __v: number }> | null): Area | null {
    return document ? parseNonNull(document) : document
}

function parseNonNull(document: Document<Types.ObjectId, {}, TArea & { __v: number }>): Area {
    const { _id, __v, uid, photos, files, ...rest } = document.toObject()

    const parseFile = function(files: Types.DocumentArray<TAreaFile>): AreaFile[] {
        return files.map(file => {
            const { _id, ...rest } = file
            return {
                id: _id?.toString(), 
                ...rest
            }
        })
    }

    return {
        id: _id.toString(), 
        uid: uid.toString(), 
        photos: parseFile(photos), 
        files: parseFile(files), 
        ...rest
    }
}