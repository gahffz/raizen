import database from "../repositories";
import SessionService from "./session.service";
import UserService from "./user.service";

const userService = new UserService(database.user)
const sessionService = new SessionService(database.session)

export {
    userService, 
    sessionService
}