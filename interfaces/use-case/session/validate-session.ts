export interface IValidateSessionUseCase {
    execute(token: string): Promise<string>
}