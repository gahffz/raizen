import { randomBytes } from "crypto"
import { ICreateSessionUseCase, ISession, ISessionDao } from "../../interfaces";

export class CreateSessionUseCase implements ICreateSessionUseCase {
    private sessionDb: ISessionDao

    constructor (sessionDb: ISessionDao) {
        this.sessionDb = sessionDb
    }

    async execute(userId: string): Promise<ISession> {
        return this.sessionDb.insert({
            userId: userId,
            token: randomBytes(128).toString('hex'),
            invalidated: false
        })
    }
}