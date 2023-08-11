import { Report } from "../../entities";

export default interface ReportRepository {
    getAll(): Promise<Report[]>

    getById(id: any): Promise<Report | null>

    create(report: Report): Promise<Report>

    update(id: any, report: Report): Promise<Report | null>

    delete(id: any): Promise<any>
}