import { Request, Response, NextFunction } from "express";
import { ISessionController, ISessionRepository } from "../interfaces";
import { HttpError } from "../utils";

export class SessionController implements ISessionController {
    private sessionRepository: ISessionRepository

    constructor(sessionRepository: ISessionRepository) {
        this.sessionRepository = sessionRepository
        this.validateSession = this.validateSession.bind(this)
    }

    validateSession(req: Request & any, res: Response, next: NextFunction): void {
        const authorizationHeader = req.headers
        if (!authorizationHeader) {
            throw new  HttpError({ status: 200, message: "Authorization Header not found"})
        }

        const authorization = authorizationHeader.authorization
        if (!authorization) {
            throw new HttpError({ status: 200, message: "Authorization not provided" })
        } else if (!authorization.startsWith('Basic ')) {
            throw new HttpError({ status: 200, message: "Invalid Authorization"})
        }
        const token = authorization.slice(6)

        this.sessionRepository.validateSession(token)
        .then((uid) => {
            req.locals ? req.locals.uid = uid : req.locals = { uid: uid }
            next()
        })
        .catch((error) => {
            next(error)
        })
    }
}