import { Session } from "../../entities";

export default interface SessionRepository {
    getAll(): Promise<Session[]>

    getById(id: any): Promise<Session | null>

    getByToken(token: string): Promise<Session | null>

    create(session: Session): Promise<Session>

    updateValidity(id: any, valid: boolean): Promise<Session | null>

    delete(id: any): Promise<Session | null>
}