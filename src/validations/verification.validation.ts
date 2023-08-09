import { Validations } from "./validation";

export namespace VerificationValidation {
    export function validateToken(token: any): string {
        return Validations.validateNonNullString(token, { min: 64, max: 64 })
    }
    
    export function validateAccountType(accountType: any): number {
        return Validations.validateNonNullNumber(accountType, { min: 1, max: 2 })
    }

    export function validateVerified(verified: any): boolean {
        return Validations.validateNonNullBoolean(verified)
    }
}