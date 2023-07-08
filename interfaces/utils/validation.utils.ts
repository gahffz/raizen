export interface Length {
    min?: number,
    max?: number
}

export interface Range {
    min?: number,
    max?: number
}

export type ErrorMessage = (message: string) => void

export interface IValidator {
    checkNonNullString(value: any, length: Length, error: ErrorMessage): string

    checkNullableString(value: any, length: Length, error: ErrorMessage): string|undefined

    checkNonNullNumber(value: any, range: Range, error: ErrorMessage): number

    checkNullableNumber(value: any, range: Range, error: ErrorMessage): number|undefined
    
    checkBoolean(value: any, defaultValue: boolean, error: ErrorMessage): void
}