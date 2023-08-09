import { ISessionDao, IValidateSessionUseCase } from "../../interfaces";
import { HttpError } from "../../utils";

export class ValidateSessionUseCase implements IValidateSessionUseCase {
    private sessionDao: ISessionDao

    constructor(sessionDao: ISessionDao) {
        this.sessionDao = sessionDao
    }

    async execute(token: string): Promise<string> {
        const session = await this.sessionDao.findOne({ token: token })
        if (session === null) {
            throw new HttpError({ status: 200, message: "Session not found" })
        }

        const validate = new Date(session.createdAt.getTime() + 60 * 60_0000).getTime()
        if (validate < Date.now()) {
            throw new HttpError({ status: 200, message: "Session expired" })
        }

        return session._id
    }
}