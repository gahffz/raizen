import { IUserInput, IAccessAccountResult, ICreateUserUseCase, ILoginUseCase } from "../interfaces";
import { IUserRepository } from "../interfaces/repository/user.repository";

export class UserRepository implements IUserRepository {
    private createUserUseCase: ICreateUserUseCase
    private loginUseCase: ILoginUseCase

    constructor (createUserUseCase: ICreateUserUseCase, loginUseCase: ILoginUseCase) {
        this.createUserUseCase = createUserUseCase
        this.loginUseCase = loginUseCase
    }

    async createUser(userInput: IUserInput): Promise<IAccessAccountResult> {
        return await this.createUserUseCase.execute(userInput)
    }

    async login(username: string, password: string): Promise<IAccessAccountResult|null> {
        return await this.loginUseCase.execute(username, password)
    }
}