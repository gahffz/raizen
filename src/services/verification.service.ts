import crypto from "crypto"
import { Verification } from "../entities"
import { VerificationRepository } from "../interfaces/repositories"
import { HttpClientError } from "../errors"

export default class VerificationService {
    constructor(private repository: VerificationRepository) {
        this.createVerification = this.createVerification.bind(this)
    }

    createVerification(uid: any): Promise<Verification> {
        const verification: Verification = {
            uid: uid, 
            token: crypto.randomBytes(32).toString('hex')
        }
        return this.repository.create(verification)
    }

    async consumeToken(token: string): Promise<Verification> {
        let validation = await this.repository.findByToken(token)
        if (!validation) {
            throw new HttpClientError(400, 'Validation token not found')
        }
        if (typeof validation.createdAt === 'undefined') {
            throw new Error('createdAt is undefined')
        }
        if (typeof validation.valid === 'undefined') {
            throw new Error('valid is undefined')
        }
        if (!validation.valid) {
            throw new HttpClientError(400, 'Validation token is not valid anymore')
        }

        validation = await this.repository.updateValidity(token, false)
        if (!validation) {
            throw Error('Unexpected state: Validation not found')
        }

        return validation
    }
}