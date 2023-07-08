import { createUserUseCase } from "../use-case";
import { UserRepository } from "./user.repository";

const userRepository = new UserRepository(createUserUseCase)

export {
    userRepository
}