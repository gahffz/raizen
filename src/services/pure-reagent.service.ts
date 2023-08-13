import { PureReagent } from "../entities";
import { PureReagentRepository } from "../interfaces/repositories";

export default class PureReagentService {
    constructor(private repository: PureReagentRepository) {}

    getAll(): Promise<PureReagent[]> {
        return this.repository.getAll()
    }

    getById(id: any): Promise<PureReagent | null> {
        return this.repository.getById(id)
    }

    create(pureReagent: PureReagent): Promise<PureReagent> {
        return this.repository.create(pureReagent)
    }

    update(id: any, pureReagent: PureReagent): Promise<PureReagent | null> {
        return this.repository.update(id, pureReagent)
    }

    delete(id: any): Promise<any> {
        return this.repository.delete(id)
    }
}