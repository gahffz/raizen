import { Session } from "../../entities";

export default interface SessionRepository {
    getAll(): Promise<Session[]>

    getById(id: any): Promise<Session | null>

    getByToken(token: string): Promise<Session | null>

    create(session: Session): Promise<Session>

    updateValidityByToken(token: string, valid: boolean): Promise<Session | null>

    updateValiditiesByUid(uid: any, valid: boolean): Promise<void>

    delete(id: any): Promise<Session | null>
}