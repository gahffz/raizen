import { Report } from "../entities";
import { ReportRepository } from "../interfaces/repositories";

export default class ReportService {
    constructor(private repository: ReportRepository) {}

    getAll(): Promise<Report[]> {
        return this.repository.getAll()
    }

    getById(id: any): Promise<Report | null> {
        return this.repository.getById(id)
    }

    create(report: Report): Promise<Report> {
        return this.repository.create(report)
    }

    update(id: any, report: Report): Promise<Report | null> {
        return this.repository.update(id, report)
    }

    delete(id: any): Promise<any> {
        return this.repository.delete(id)
    }
}