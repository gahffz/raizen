import { SessionDao } from "../../dao/session.dao";
import { CreateSessionUseCase } from "./create-session";

const createSessionUseCase = new CreateSessionUseCase(new SessionDao())

export {
    createSessionUseCase
}