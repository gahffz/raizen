import { Ibc } from "../entities";
import { IbcRepository } from "../interfaces/repositories";

export default class IbcService {
    constructor(private repository: IbcRepository) {}

    getAll(): Promise<Ibc[]> {
        return this.repository.getAll()
    }

    getById(id: any): Promise<Ibc | null> {
        return this.repository.getById(id)
    }

    create(ibc: Ibc): Promise<Ibc> {
        return this.repository.create(ibc)
    }

    update(id: any, ibc: Ibc): Promise<Ibc | null> {
        return this.repository.update(id, ibc)
    }

    delete(id: any): Promise<any> {
        return this.repository.delete(id)
    }
}