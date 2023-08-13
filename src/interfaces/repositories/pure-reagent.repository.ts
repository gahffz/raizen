import { PureReagent } from "../../entities";

export default interface PureReagentRepository {
    getAll(): Promise<PureReagent[]>

    getById(id: any): Promise<PureReagent | null>

    create(pureReagent: PureReagent): Promise<PureReagent>

    update(id: any, pureReagent: PureReagent): Promise<PureReagent | null>

    delete(id: any): Promise<any>
}