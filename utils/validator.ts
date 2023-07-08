import { IValidator, Length, Range, ErrorMessage } from "../interfaces/utils/validation.utils"

export class Validator implements IValidator {
    checkNonNullString(value: any, length: Length, error: ErrorMessage): string {
        const result = this.checkNullableString(value, length, error)
        return result? result : ""
    }

    checkNullableString(value: any, length: Length, error: ErrorMessage): string|undefined {
        if (!value || typeof value !== 'string') {
            return value
        }
        if (typeof value !== 'string') {
            error("input must be a string")
            return undefined
        }
        if (length) {
            if ((length.min && value.length < length.min) || (length.max && value.length > length.max)) {
                error("input's length must be between " + (length?.min ?? 0) + "-" + (length?.max ?? "unlimited"))
            }
        }
        return value
    }

    checkNonNullNumber(value: any, range: Range, error: ErrorMessage): number {
        const result = this.checkNullableNumber(value, range, error)
        return result? result : 0
    }

    checkNullableNumber(value: any, range: Range, error: ErrorMessage): number|undefined {
        if (!value) {
            return value
        }
        if (typeof value !== 'number') {
            error("input must be a number")
            return undefined
        }
        if (range) {
            if (range.min && value < range.min || range.max && value > range.max) {
                error("input's range must be between " + (range?.min ?? 0) + "-" + (range?.max ?? "unlimited"))
            }
        }
        return value
    }
    
    checkBoolean(value: any, defaultValue: boolean, error: ErrorMessage): boolean {
        if (!value) {
            error("input must be a boolean")
            return defaultValue
        } else {
            return value
        }
    }
}