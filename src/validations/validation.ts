import { ValidationError } from "../errors"

export namespace Validations {
    type Length = {
        min?: number
        max?: number
    }
    
    type Spaces = 'NO_CHANGES' | 'TRIM' | 'TRIM_AND_EXTRAS' | 'REMOVE_ALL'
    
    type Options = {
        spaces?: Spaces
        toLowerCase?: boolean
    }

    export function validateNullableString(value: any, length?: Length, options?: Options): string | undefined {
        if (value) {
            return validateNonNullString(value, length, options)
        } else {
            return undefined
        }
    }

    export function validateNonNullString(value: any, length?: Length, options?: Options) {
        if (typeof value !== 'string') {
            throw new ValidationError('input is not a string')
        }
        
        const minLength = length?.min || 1
        const maxLength = length?.max || 100
    
        if (value.length < minLength || value.length > maxLength) {
            throw new ValidationError('Value length range should be between ' + minLength + ' and ' + maxLength)
        }

        switch (options?.spaces ?? 'TRIM_AND_EXTRAS') {
            case 'NO_CHANGES':
                break
            case 'TRIM':
                value = value.trim()
                break
            case 'TRIM_AND_EXTRAS':
                value = value.trim().replace(/\s+/g, ' ')
                break
            case 'REMOVE_ALL':
                value = value.replace(/\s/g, '')
                break
            default: 
                throw new Error('Invalid option\'s space type')
        }

        if (options?.toLowerCase ?? true) {
            value = value.toLowerCase()
        }

        return value
    }

    type Range = {
        min?: number
        max?: number
    }

    export function validateNonNullNumber(value: any, range?: Range): number {
        if (typeof value !== 'number') {
            throw new ValidationError('value is not a number')
        }

        const minRange = range?.min || 0
        const maxRange = range?.max || 1000

        if (value < minRange || value > maxRange) {
            throw new ValidationError('Value range should be between ' + minRange + ' and ' + maxRange)
        }
        return value
    }

    export function validateNonNullBoolean(value: any, expected?: boolean): boolean {
        if (typeof value !== 'boolean') {
            throw new ValidationError('value is not a boolean')
        }

        if (typeof expected === 'boolean' && expected !== value) {
            throw new ValidationError('value must be ' + expected + ' not ' + value)
        }
        return value
    }
}
