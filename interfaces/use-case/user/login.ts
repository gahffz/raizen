import { IAccessAccountResult } from "../../models";

export interface ILoginUseCase {
    execute(username: string, password: string): Promise<IAccessAccountResult|null>
}