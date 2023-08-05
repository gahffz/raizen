import crypto from "crypto"
import { Session } from "../entities";
import { SessionRepository } from "../interfaces/repositories";

export default class SessionService {
    constructor(private sessionReposiory: SessionRepository) {
        this.createSession = this.createSession.bind(this)
    }

    createSession(uid: any): Promise<Session> {
        const token = crypto.randomBytes(128).toString('hex')
        return this.sessionReposiory.create({
            uid: uid, 
            token: token
        })
    }
}