import { NextFunction, Request, Response } from "express";
import { HttpClientError } from "../errors";
import AccountService from "../services/account.service";

export default class SessionMiddleware {
    constructor(private accountService: AccountService) {
        this.validate = this.validate.bind(this)
    }

    validate(req: Request & any, res: Response, next: NextFunction) {
        const authorizationHeader = req.headers
        if (!authorizationHeader) {
            throw new HttpClientError(400, 'Authorization Header not found')
        }

        const authorization = authorizationHeader.authorization
        if (!authorization) {
            throw new HttpClientError(200, 'Authorization not provided')
        } else if (!authorization.startsWith('Bearer ')) {
            throw new HttpClientError(200, 'Invalid Authorization')
        }
        const token = authorization.slice(7)

        this.accountService.checkSession(token)
            .then(session => {
                req.locals ? req.locals.session = session : req.locals = { session }
                next()
            })
            .catch(error => next(error))
    }
}