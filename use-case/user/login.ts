import { ICreateSessionUseCase, IAccessAccountResult, ILoginUseCase, IUserDao } from "../../interfaces";

export class LoginUseCase implements ILoginUseCase {
    private userDao: IUserDao
    private createSessionUseCase: ICreateSessionUseCase

    constructor (userDao: IUserDao, createSessionUseCase: ICreateSessionUseCase) {
        this.userDao = userDao,
        this.createSessionUseCase = createSessionUseCase
    }

    async execute(username: string, password: string): Promise<IAccessAccountResult|null> {
        const user = await this.userDao.findOne({ username: username, password: password })
        if (user) {
            const session = await this.createSessionUseCase.execute(user._id)
            return {
                uid: user._id,
                session: {
                    token: session.token,
                    validity: new Date(session.createdAt.getTime() + 60 * 60_000).toString()
                }
            }
        }
        return null
    }
}