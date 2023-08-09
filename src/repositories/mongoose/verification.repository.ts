import { Document, Types } from "mongoose";
import { Verification } from "../../entities";
import { VerificationRepository } from "../../interfaces/repositories";
import { Verification as VerificationType, VerificationModel } from "./models/verification.model";

export default class VerificationMongoRepository implements VerificationRepository {
    async findById(id: any): Promise<Verification | null> {
        const document = await VerificationModel.findById(id)
        return parseNullable(document)
    }
    async findByToken(token: string): Promise<Verification | null> {
        const document = await VerificationModel.findOne({ token })
        return parseNullable(document)
    }
    async findByUid(uid: any): Promise<Verification | null> {
        const document = await VerificationModel.findOne({ uid })
        return parseNullable(document)
    }
    async create(verification: Verification): Promise<Verification> {
        const document = await VerificationModel.create(verification)
        return parseNonNull(document)
    }
    async updateValidity(token: string, valid: boolean): Promise<Verification | null> {
        const document = await VerificationModel.findOneAndUpdate({ token }, { valid }, { new: true })
        return parseNullable(document)
    }
    async delete(id: any): Promise<Verification | null> {
        const document = await VerificationModel.findByIdAndDelete(id)
        return parseNullable(document)
    }
}

function parseNullable(document: Document<Types.ObjectId, {}, VerificationType> | null): Verification | null {
    return document ? parseNonNull(document) : document
}

function parseNonNull(document: Document<Types.ObjectId, {}, VerificationType>): Verification {
    const { _id, ...rest } = document.toObject()
    return {
        id: _id.toString(), 
        ...rest
    }
}