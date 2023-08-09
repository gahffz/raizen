import { NextFunction, Request, Response } from "express"
import { HttpClientError } from "../errors"
import UserService from "../services/user.service"
import VerificationService from "../services/verification.service"
import { VerificationDto } from "../dto"
import { verificationDtoValidation } from "../validations/dto"

export default class AdminController {
    constructor (
        private userService: UserService, 
        private verificationService: VerificationService
    ) {
        this.verifyAccount = this.verifyAccount.bind(this)
    }

    verifyAccount(req: Request, res: Response, next: NextFunction) {
        const dto = new VerificationDto()
        dto.token = req.query.token
        dto.accountType = req.body.accountType
        dto.verified = req.body.verified

        const errors = verificationDtoValidation.validate(dto)

        if (errors) {
            throw new HttpClientError(400, errors)
        }

        const { token, accountType, verified } = dto

        this.verificationService.consumeToken(token)
            .then(verification => {
                Promise.all([
                    this.userService.editVerificationState(verification.uid, verified), 
                    this.userService.editAccountType(verification.uid, accountType)
                ]).then(results => {
                    res.end()
                })
            })
            .catch(error => next(error))
    }
}