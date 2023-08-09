import { IApproval } from "../../models";

export interface ICreateApprovalUseCase {
    execute(userId: string): Promise<IApproval>
}