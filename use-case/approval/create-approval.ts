import { randomBytes } from "crypto"
import { IApproval, IApprovalDao, ICreateApprovalUseCase } from "../../interfaces";

export class CreateApprovalUseCase implements ICreateApprovalUseCase {
    private approvalDb: IApprovalDao

    constructor (approvalDb: IApprovalDao) {
        this.approvalDb = approvalDb
    }

    public async execute(userId: string): Promise<IApproval> {
        return this.approvalDb.insert({
            userId: userId, 
            token: randomBytes(16).toString('hex')
        })
    }
}