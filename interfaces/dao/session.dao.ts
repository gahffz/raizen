import { ISession, ISessionInput } from "../models"

export interface ISessionDao {
    find(filter?: Object): Promise<Array<ISession>>

    findOne(filter: Object): Promise<ISession|null>

    findById(id: string): Promise<ISession|null>

    insert(session: ISessionInput): Promise<ISession>

    update(session: ISession): Promise<ISession|null>
    
    removeById(id: string): Promise<boolean>
}