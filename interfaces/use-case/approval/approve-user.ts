export interface IApproveUserUseCase {
    execute(adminId: string, token: string, accountType: number, isTrue: boolean): Promise<void>
}