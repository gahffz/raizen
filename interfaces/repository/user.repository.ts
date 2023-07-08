import { ICreateUserResult, IUserInput } from "../models";

export interface IUserRepository {
    createUser(userInput: IUserInput): Promise<ICreateUserResult>
}