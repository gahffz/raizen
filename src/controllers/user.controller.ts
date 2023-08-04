import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { UserDto } from "../dto";
import UserService from "../services/user.service";
import { HttpClientError } from "../errors";
import { userDtoValidation } from "../validations/dto";

export default class UserController {
    constructor(
        private userService: UserService
    ) {
        this.siginup = this.siginup.bind(this)
    }
    
    siginup(req: Request, res: Response, next: NextFunction) {

        const dto = new UserDto()
        dto.name = req.body.name
        dto.surname = req.body.surname
        dto.username = req.body.username
        dto.password = req.body.password

        const errors = userDtoValidation.validate(dto)
        if (errors) {
            throw new HttpClientError(400, errors)
        }

        const user: User = {
            name: dto.name, 
            surname: dto.surname, 
            username: dto.username, 
            password: dto.username
        }

        this.userService.createUser(user).then(user => {
            // TODO
            res.end()
        }).catch(error => next(error))
    }
}