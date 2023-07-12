export interface IUserInput {
    name: string
    surname: string
    username: string
    password: string
    phone?: string|null
    gender?: number|null
    photo?: string|null
    unit: number
    sector: number
    shift?: number|null
}

export interface IUser extends IUserInput {
    _id: string,
    accountType: number,
    approved: boolean
    createdAt: Date
    updatedAt: Date
}