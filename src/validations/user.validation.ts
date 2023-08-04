import { Validations } from "./validation"

export namespace UserValidation {
    export function validateName(name: any): string {
        return Validations.validateNonNullString(name, { min: 2, max: 30 })
    }

    export function validateSurname(surname: any): string {
        return Validations.validateNonNullString(surname, { min: 2, max: 20 })
    }

    export function validateUsername(username: any): string {
        return Validations.validateNonNullString(username, { min: 6, max: 6 })
    }

    export function validatePassword(password: any): string {
        return Validations.validateNonNullString(
            password, { min: 8, max: 16 }, { spaces: 'NO_CHANGES', toLowerCase: false }
        )
    }
}