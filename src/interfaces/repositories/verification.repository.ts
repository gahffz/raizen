import { Verification } from "../../entities"

export default interface VerificationRepository {
    findById(id: any): Promise<Verification | null>

    findByToken(token: string): Promise<Verification | null>

    findByUid(uid: any): Promise<Verification | null>

    create(verification: Verification): Promise<Verification>

    updateValidity(token: string, valid: boolean): Promise<Verification | null>

    delete(id: any): Promise<Verification | null>
}