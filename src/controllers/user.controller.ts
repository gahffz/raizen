import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { UserDto } from "../dto";
import UserService from "../services/user.service";
import { HttpClientError } from "../errors";
import { userDtoValidation } from "../validations/dto";
import SessionService from "../services/session.service";
import { LoginResponse } from "../responses";

export default class UserController {
    constructor(
        private userService: UserService, 
        private sessionService: SessionService
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
            const sessionPromise = this.sessionService.createSession(user.id)
            Promise.all([sessionPromise]).then(results => {
                const [session] = results

                if (!session.id) {
                    throw Error('uid is ' + typeof session.id)
                }
                if (!session.createdAt) {
                    throw Error('createdAt is ' + typeof session.createdAt)
                }

                const response: LoginResponse = {
                    token: session.token, 
                    expiration: new Date(session.createdAt.getTime() + 60 * 60_000).toISOString()
                }
                res.send(response)
            })
        }).catch(error => next(error))
    }
}