import database from "../repositories";
import AccountService from "./account.service";
import AreaService from "./area.service";
import SessionService from "./session.service";
import UserService from "./user.service";
import VerificationService from "./verification.service";

const accountService = new AccountService(database.user, database.session, database.verification)
const areaService = new AreaService(database.area, database.areaType)
const userService = new UserService(database.user)
const sessionService = new SessionService(database.session)
const verificationService = new VerificationService(database.verification)

export {
    accountService, 
    areaService, 
    userService, 
    sessionService, 
    verificationService
}