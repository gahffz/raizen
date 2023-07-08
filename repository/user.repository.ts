import { IUserInput, ICreateUserResult, ICreateUserUseCase } from "../interfaces";
import { IUserRepository } from "../interfaces/repository/user.repository";

export class UserRepository implements IUserRepository {
    private createUserUseCase: ICreateUserUseCase

    constructor (createUserUseCase: ICreateUserUseCase) {
        this.createUserUseCase = createUserUseCase
    }

    async createUser(userInput: IUserInput): Promise<ICreateUserResult> {
        return await this.createUserUseCase.execute(userInput)
    }
}