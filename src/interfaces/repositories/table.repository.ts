import { Table } from "../../entities";

export default interface TableRepository {
    getAllByType(type: any): Promise<Table[]>

    getById(id: any): Promise<Table | null>

    create(table: Table): Promise<Table>

    update(id: any, table: Table): Promise<Table | null>

    delete(id: any): Promise<any>
}