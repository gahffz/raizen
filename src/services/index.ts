import database from "../repositories";
import UserService from "./user.service";

const userService = new UserService(database.user)

export {
    userService
}