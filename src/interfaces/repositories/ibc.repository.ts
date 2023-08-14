import { Ibc } from "../../entities";

export default interface IbcRepository {
    getAll(): Promise<Ibc[]>

    getById(id: any): Promise<Ibc | null>

    create(ibc: Ibc): Promise<Ibc>

    update(id: any, ibc: Ibc): Promise<Ibc | null>

    delete(id: any): Promise<any>
}