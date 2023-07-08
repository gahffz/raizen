import { ISession } from "../../models";

export interface ICreateSessionUseCase {
    execute(userId: string): Promise<ISession>
}