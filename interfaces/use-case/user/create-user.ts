import { IAccessAccountResult, IUserInput } from "../../models";

export interface ICreateUserUseCase {
    execute(userInput: IUserInput): Promise<IAccessAccountResult>
}