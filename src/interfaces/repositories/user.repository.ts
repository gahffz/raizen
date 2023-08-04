import { User, UserPersonalInfoUpdate } from "../../entities";

export default interface UserRepository {
    getAll(): Promise<User[]>

    getById(id: string): Promise<User | null>

    create(user: User): Promise<User>

    updatePersonalInfo(id: any, user: UserPersonalInfoUpdate): Promise<User | null>

    updateUsername(id: any, username: string): Promise<User | null>

    updatePassword(id: any, password: string): Promise<User | null>

    updateVerification(id: any, verified: boolean): Promise<User | null>

    delete(id: any): Promise<any>
}