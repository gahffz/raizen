import { User } from "../entities";
import UserRepository from "../interfaces/repositories/user.repository";

export default class UserService {
    constructor(private userRepository: UserRepository) {}

    createUser(user: User): Promise<User> {
        return this.userRepository.create(user)
    }

    editVerificationState(uid: any, verified: boolean): Promise<User | null> {
        return this.userRepository.updateVerification(uid, verified)
    }

    editAccountType(uid: any, accountType: number): Promise<User | null> {
        return this.userRepository.updateAccountType(uid, accountType)
    }
}