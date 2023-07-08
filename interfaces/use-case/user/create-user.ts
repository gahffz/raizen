import { ICreateUserResult, IUserInput } from "../../models";

export interface ICreateUserUseCase {
    execute(userInput: IUserInput): Promise<ICreateUserResult>
}