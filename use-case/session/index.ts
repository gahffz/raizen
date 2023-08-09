import { SessionDao } from "../../dao/session.dao";
import { CreateSessionUseCase } from "./create-session";
import { ValidateSessionUseCase } from "./validate-session";

const createSessionUseCase = new CreateSessionUseCase(new SessionDao())
const validateSessionUseCase = new ValidateSessionUseCase(new SessionDao())

export {
    createSessionUseCase, 
    validateSessionUseCase
}