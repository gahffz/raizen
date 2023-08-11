import { Validations } from "./validation";

export namespace IdValidation {
    export function validateId(uid: any): string {
        return Validations.validateNonNullString(uid, { min: 24, max: 24 })
    }
}