import { BenchReagent } from "../../entities";

export default interface BenchReagentRepository {
    getAll(): Promise<BenchReagent[]>

    getById(id: any): Promise<BenchReagent | null>

    create(benchReagent: BenchReagent): Promise<BenchReagent>

    update(id: any, benchReagent: BenchReagent): Promise<BenchReagent | null>

    delete(id: any): Promise<any>
}