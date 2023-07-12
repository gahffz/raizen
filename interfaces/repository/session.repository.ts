export interface ISessionRepository {
    validateSession(token: string): Promise<string>
}