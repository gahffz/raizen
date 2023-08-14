import { Document, Types } from "mongoose";
import { Table } from "../../entities";
import { TableRepository } from "../../interfaces/repositories";
import { Table as TTable, TableModel } from "./models";

export default class TableMongoRepository implements TableRepository {
    async getAllByType(type: any): Promise<Table[]> {
        const documents = await TableModel.find({ type })
        return documents.map(document => parse(document))
    }
    async getById(id: any): Promise<Table | null> {
        const document = await TableModel.findById(id)
        return document ? parse(document) : document
    }
    async create(table: Table): Promise<Table> {
        const document = await TableModel.create(table)
        return parse(document)
    }
    async update(id: any, table: Table): Promise<Table | null> {
        const document = await TableModel.findByIdAndUpdate(id, table, { new: true })
        return document ? parse(document) : document
    }
    async delete(id: any): Promise<any> {
        const document = await TableModel.findByIdAndDelete(id)
        return document ? parse(document) : document
    }
}

function parse(document: Document<Types.ObjectId, {}, TTable>): Table {
    const { _id, uid, ...rest } = document.toObject({ versionKey: false })
    return {
        id: _id.toString(), 
        uid: uid.toString(), 
        ...rest
    }
}