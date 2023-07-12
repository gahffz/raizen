export interface IApprovalInput {
    userId: string
    token: string
}

export interface IApproval extends IApprovalInput {
    _id: string
    invalidated: boolean
    createdAt: Date
    updatedAt: Date
}