import { Table } from "../entities";
import { TableRepository } from "../interfaces/repositories";

export default class TableService {
    constructor(private repository: TableRepository) {}

    getAllByType(type: number): Promise<Table[]> {
        return this.repository.getAllByType(type)
    }

    getById(id: any): Promise<Table | null> {
        return this.repository.getById(id)
    }

    create(table: Table): Promise<Table> {
        return this.repository.create(table)
    }

    update(id: any, table: Table): Promise<Table | null> {
        return this.repository.update(id, table)
    }

    delete(id: any): Promise<any> {
        return this.repository.delete(id)
    }
}