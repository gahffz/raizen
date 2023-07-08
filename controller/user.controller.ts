import express, { NextFunction, Request, Response } from "express";
import { IUserController, IUserRepository, IValidator } from "../interfaces";

export class UserController implements IUserController {
    private repository: IUserRepository
    private validator: IValidator

    constructor(repository: IUserRepository, validator: IValidator) {
        this.repository = repository
        this.validator = validator

        this.createAccount = this.createAccount.bind(this)
    }

    createAccount(req: Request, res: Response, next: NextFunction): void {
        const errors = Array<string>()
    
        const name = this.validator.checkNonNullString(req.body.name, { min: 2, max: 30}, (error) => { 
            errors.push('name: ' + error) 
        })
        const surname = this.validator.checkNonNullString(req.body.surname, { min: 2, max: 30}, (error) => {
            errors.push('surname: ' + error)
        })
        const username = this.validator.checkNonNullString(req.body.username, { min: 6, max: 6}, (error) => {
            errors.push('username: ' + error)
        })
        const password = this.validator.checkNonNullString(req.body.password, { min: 8, max: 16 }, (error) => {
            errors.push('password: ' + error)
        })
        const phone = this.validator.checkNullableString(req.body.phone, { min: 13, max: 13}, (error) => {
            errors.push('phone: ' + error)
        })
        const gender = this.validator.checkNullableNumber(req.body.gender, { min: 1, max: 3 }, (error) => {
            errors.push('gender: ' + error)
        })
        const photo = this.validator.checkNullableString(req.body.photo, { max: 200 }, (error) => {
            errors.push('photo: ' + error)
        })
        const unit = this.validator.checkNonNullNumber(req.body.unit, { min: 1, max: 10 }, (error) => {
            errors.push('unit: ', error)
        })
        const sector = this.validator.checkNonNullNumber(req.body.sector, { min: 1, max: 10 }, (error) => {
            errors.push('sector: ' + error)
        })
        const shift = this.validator.checkNullableNumber(req.body.shift, { min: 1, max: 10 }, (error) => {
            errors.push('shift: ', error)
        })
    
        if (errors.length !== 0) {
            res.send(JSON.stringify({
                errors: errors
            }))
            return
        }
    
        this.repository.createUser({
            name: name,
            surname: surname, 
            username: username, 
            password: password,
            phone: phone,
            gender: gender,
            photo: photo,
            unit: unit,
            sector: sector,
            shift: shift
        })
        .then((createUserResult) => {
            res.send(JSON.stringify(createUserResult))
        })
        .catch((error) => {
            next(error)
        })
    }
}