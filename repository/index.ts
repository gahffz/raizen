import { createUserUseCase, loginUseCase } from "../use-case";
import { UserRepository } from "./user.repository";

const userRepository = new UserRepository(createUserUseCase, loginUseCase)

export {
    userRepository
}