export interface IApprovalInput {
    userId: string
    token: string
}

export interface IApproval extends IApprovalInput {
    _id: string
    createdAt: Date
    updatedAt: Date
}