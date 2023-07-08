export interface IUserInput {
    name: string
    surname: string
    username: string
    password: string
    phone?: string
    gender?: number
    photo?: string
    unit: number
    sector: number
    shift?: number
}

export interface IUser extends IUserInput {
    _id: string,
    approved: boolean
    createdAt: Date
    updatedAt: Date
}