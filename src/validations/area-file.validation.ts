import { Validations } from "./validation";

export namespace AreaFileValidation {
    export function validateFilename(filename: any): string {
        return Validations.validateNonNullString(filename, { min: 10, max: 100 })
    }
}