import { User } from "../entities";
import UserRepository from "../interfaces/repositories/user.repository";

export default class UserService {
    constructor(private userRepository: UserRepository) {}

    createUser(user: User): Promise<User> {
        return this.userRepository.create(user)
    }
}