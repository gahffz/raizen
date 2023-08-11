import { IdValidation } from "./id.validation";
import { Validations } from "./validation";

export namespace AreaValidation {
    export function validateUid(uid: any): string {
        return IdValidation.validateId(uid)
    }
    export function validateDetails(details: any): string {
        return Validations.validateNonNullString(details)
    }
}