import { IAccessAccountResult, IUserInput } from "../models";

export interface IUserRepository {
    createUser(userInput: IUserInput): Promise<IAccessAccountResult>
    login(username: string, password: string): Promise<IAccessAccountResult|null>
}