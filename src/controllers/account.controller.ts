import { NextFunction, Request, Response } from "express";
import AccountService from "../services/account.service";
import { UserDto, VerificationDto } from "../dto";
import { signinDtoValidation, userDtoValidation, verificationDtoValidation } from "../validations/dto";
import { HttpClientError } from "../errors";
import { Signin, User } from "../entities";
import SigninDto from "../dto/signin.dto";

export default class AccountController {
    constructor(private accountService: AccountService) {
        this.signup = this.signup.bind(this)
        this.signin = this.signin.bind(this)
        this.signout = this.signout.bind(this)
        this.getAccountVerification = this.getAccountVerification.bind(this)
        this.verifyAccount = this.verifyAccount.bind(this)
    }

    signup(req: Request, res: Response, next: NextFunction) {
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
            password: dto.password
        }

        this.accountService.signup(user)
            .then(login => res.send(login))
            .catch(error => next(error))
    }

    signin(req: Request, res: Response, next: NextFunction) {
        const dto = new SigninDto()
        dto.username = req.body.username
        dto.password = req.body.password

        const errors = signinDtoValidation.validate(dto)

        if (errors) {
            throw new HttpClientError(400, errors)
        }

        const signin: Signin = {
            username: dto.username, 
            password: dto.password
        }

        this.accountService.signin(signin)
            .then(login => res.send(login))
            .catch(error => next(error))
    }

    signout(req: Request & any, res: Response, next: NextFunction) {
        if (req.body.all) {
            this.accountService.signoutAll(req.locals.session.uid)
                .then(() => res.end())
                .catch(error => next(error))
        } else {
            this.accountService.signoutAll(req.locals.session.uid)
                .then(() => res.end())
                .catch(error => next(error))
        }
    }

    getAccountVerification(req: Request & any, res: Response, next: NextFunction) {
        const uid = req.locals?.session?.uid
        if (!uid) {
            throw new Error('Session is undefined')
        }
        this.accountService.getAccountVerification(uid)
            .then(verification => res.send(verification))
            .catch(error => next(error))
    }

    verifyAccount(req: Request & any, res: Response, next: NextFunction) {
        const dto = new VerificationDto()
        dto.token = req.query.token
        dto.accountType = req.body.accountType
        dto.verified = req.body.verified

        const errors = verificationDtoValidation.validate(dto)
        if (errors) {
            throw new HttpClientError(400, errors)
        }

        this.accountService.verify(dto.token, dto.verified, dto.accountType)
            .then(() => res.end())
            .catch(error => next(error))
    }
}