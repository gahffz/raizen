import { ISessionRepository, IValidateSessionUseCase } from "../interfaces";

export class SessionRepository implements ISessionRepository {
    private validateSessionUseCase: IValidateSessionUseCase

    constructor(validateSessionUseCase: IValidateSessionUseCase) {
        this.validateSessionUseCase = validateSessionUseCase
    }

    async validateSession(token: string): Promise<string> {
        return await this.validateSessionUseCase.execute(token)
    }
}