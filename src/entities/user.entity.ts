export default interface User {
    id?: any
    name: string
    surname: string
    username: string
    password: string
    verified?: boolean
    createdAt?: Date
    updatedAt?: Date
}