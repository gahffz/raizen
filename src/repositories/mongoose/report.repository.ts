import { Document, Types } from "mongoose";
import { Area, Report } from "../../entities";
import { AreaRepository, ReportRepository } from "../../interfaces/repositories";
import { Report as TReport, ReportModel } from "./models";

export default class ReportMongoRepository implements ReportRepository {
    async getAll(): Promise<Report[]> {
        const documents = await ReportModel.find()
        return documents.map(document => parse(document))
    }
    async getById(id: any): Promise<Report | null> {
        const document = await ReportModel.findById(id)
        return document ? parse(document) : document
    }
    async create(report: Report): Promise<Report> {
        const document = await ReportModel.create(report)
        return document ? parse(document) : document
    }
    async update(id: any, report: Report): Promise<Report | null> {
        const document = await ReportModel.findByIdAndUpdate(id, report, { new: true })
        return document ? parse(document) : document
    }
    async delete(id: any): Promise<any> {
        const document = await ReportModel.findByIdAndDelete(id)
        return document ? parse(document) : document
    }
}

type DocumentType = Document<Types.ObjectId, {}, TReport & { __v: number }>

function parse(document: DocumentType): Report {
    const { _id, __v, ...rest } = document.toObject()
    return {
        id: _id.toString(), 
        ...rest
    }
}