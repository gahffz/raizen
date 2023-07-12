import { IApprovalRepository, IApproveUserUseCase } from "../interfaces";

export class ApprovalRepository implements IApprovalRepository {
    private approveUserUseCase: IApproveUserUseCase

    constructor(approveUserUseCase: IApproveUserUseCase) {
        this.approveUserUseCase = approveUserUseCase
    }

    async approveUser(adminId: string, token: string, accountType: number, isTrue: boolean): Promise<void> {
        await this.approveUserUseCase.execute(adminId, token, accountType, isTrue)
    }
}