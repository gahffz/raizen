export interface IApprovalRepository {
    approveUser(adminId: string, token: string, accountType: number, isTrue: boolean): Promise<void>
}