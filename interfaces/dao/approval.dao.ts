import { IApproval, IApprovalInput } from "../models"

export interface IApprovalDao {
    find(filter?: Object): Promise<Array<IApproval>>

    findOne(filter: Object): Promise<IApproval|null>

    findById(id: String): Promise<IApproval|null>

    insert(approval: IApprovalInput): Promise<IApproval>

    update(approval: IApproval): Promise<IApproval|null>
    
    deleteById(id: string): Promise<boolean>
}