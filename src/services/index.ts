import database from "../repositories";
import SessionService from "./session.service";
import UserService from "./user.service";
import VerificationService from "./verification.service";

const userService = new UserService(database.user)
const sessionService = new SessionService(database.session)
const verificationService = new VerificationService(database.verification)

export {
    userService, 
    sessionService, 
    verificationService
}