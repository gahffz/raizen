import { Request, Response, NextFunction } from "express";
import { HttpError, validator } from "../utils";
import { IApprovalController, IApprovalRepository } from "../interfaces";

export class ApprovalController implements IApprovalController {
    private approvalRepository: IApprovalRepository
    
    constructor(approvalRepository: IApprovalRepository) {
        this.approvalRepository = approvalRepository
        
        this.approveUser = this.approveUser.bind(this)
    }

    approveUser(req: Request & { locals?: { uid?: string } }, res: Response, next: NextFunction): void {
        const errors = Array<string>()

        if (!req.locals || !req.locals.uid) {
            throw new Error("req.locals.uid is not defined")
        }

        const token = validator.checkNonNullString(req.query.token, {}, (error) => {
            errors.push('token: ' + error)
        })
        const accountType = validator.checkNonNullNumber(req.body.accountType, {}, (error) => {
            errors.push('accountType: ' + error)
        })
        const isTrue = validator.checkBoolean(req.body.isTrue, false, (error) => {
            errors.push('isTrue: ' + error)
        })

        if (errors.length !== 0) {
            throw new HttpError({ status: 200, message: JSON.stringify(errors) })
        }
        
        this.approvalRepository.approveUser(req.locals.uid, token, accountType, isTrue)
        .then(() => {
            res.end()
        })
        .catch((error) => {
            next(error)
        })
    }
}