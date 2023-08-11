import { Validations } from "./validation";

export namespace AreaTypeValidation {
    export function validateName(name: any): string {
        return Validations.validateNonNullString(name, { min: 2, max: 30 })
    }
}