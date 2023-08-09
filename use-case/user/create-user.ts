import { ICreateUserUseCase, ICreateApprovalUseCase, ICreateSessionUseCase, IUserDao, IUserInput, IAccessAccountResult } from "../../interfaces";

export class CreateUser implements ICreateUserUseCase {
    private userDb: IUserDao
    private createSessionUseCase: ICreateSessionUseCase
    private createApprovalUseCase: ICreateApprovalUseCase

    constructor (
        userDb: IUserDao, 
        createSessionUseCase: ICreateSessionUseCase, 
        createApprovalUseCase: ICreateApprovalUseCase
    ) {
        this.userDb = userDb
        this.createSessionUseCase = createSessionUseCase
        this.createApprovalUseCase = createApprovalUseCase
    }

    async execute(userInput: IUserInput): Promise<IAccessAccountResult> {
        const user = await this.userDb.insert(userInput)
    
        const sessionPromise = this.createSessionUseCase.execute(user._id)
        const approvalPromise = this.createApprovalUseCase.execute(user._id)
    
        const [session] = await Promise.all([sessionPromise, approvalPromise])
    
        return {
            uid: user._id.toString(),
            session: {
                token: session.token,
                validity: new Date(session.createdAt.getTime() + 30 * 60000).toISOString()
            }
        }
    }
}