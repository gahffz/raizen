import { IValidator, Length, Range, ErrorMessage } from "../interfaces/utils/validation.utils"

export class Validator implements IValidator {
    checkNonNullString(value: any, length: Length, error: ErrorMessage): string {
        // If it's 'null' or 'undefined, returns it
        if (value === null || typeof value === 'undefined') {
            error("input is '" + typeof value + "'")
            return ""
        }

        // If it isn't a 'string', returns undefined
        if (typeof value !== 'string') {
            error("input must be a 'string'. But found '" + typeof value + "'")
            return ""
        }

        // Checks string length
        if (length) {
            if ((length.min && value.length < length.min) || (length.max && value.length > length.max)) {
                error("input's length must be between " + (length?.min ?? 0) + "-" + (length?.max ?? "unlimited"))
            }
        }
        return value
    }

    checkNullableString(value: any, length: Length, error: ErrorMessage): string|null|undefined {
        // If it's 'null' or 'undefined, returns it
        if (value === null || typeof value === 'undefined') {
            return value
        }

        // If it isn't a 'string', returns undefined
        if (typeof value !== 'string') {
            error("input must be a 'string'. But found '" + typeof value + "'")
            return undefined
        }

        // Checks string length
        if (length) {
            if ((length.min && value.length < length.min) || (length.max && value.length > length.max)) {
                error("input's length must be between " + (length?.min ?? 0) + "-" + (length?.max ?? "unlimited"))
            }
        }
        return value
    }

    checkNonNullNumber(value: any, range: Range, error: ErrorMessage): number {
        const result = this.checkNullableNumber(value, range, error)
        if (result) {
            return result
        } else {
            error("input is '" + typeof result + "'")
            return 0
        }
    }

    checkNullableNumber(value: any, range: Range, error: ErrorMessage): number|null|undefined {
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