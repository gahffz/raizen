export interface ISessionInput {
    userId: string, 
    token: string,
    invalidated: boolean
}

export interface ISession extends ISessionInput {
    _id: string
    createdAt: Date
    updatedAt: Date
}