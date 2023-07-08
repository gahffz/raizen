import { IUser, IUserInput } from "../models"

export interface IUserDao {
    find(filter?: Object): Promise<Array<IUser>>

    findOne(filter: Object): Promise<IUser|null>

    findById(id: string): Promise<IUser|null>

    insert(user: IUserInput): Promise<IUser>

    update(user: IUser): Promise<IUser|null>
    
    removeById(id: string): Promise<boolean>
}