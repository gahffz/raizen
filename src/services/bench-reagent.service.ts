import { BenchReagent } from "../entities";
import { BenchReagentRepository } from "../interfaces/repositories";

export default class BenchReagentService {
    constructor(private repository: BenchReagentRepository) {}

    getAll(): Promise<BenchReagent[]> {
        return this.repository.getAll()
    }

    getById(id: any): Promise<BenchReagent | null> {
        return this.repository.getById(id)
    }

    create(benchReagent: BenchReagent): Promise<BenchReagent> {
        return this.repository.create(benchReagent)
    }

    update(id: any, benchReagent: BenchReagent): Promise<BenchReagent | null> {
        return this.repository.update(id, benchReagent)
    }

    delete(id: any): Promise<any> {
        return this.repository.delete(id)
    }
}