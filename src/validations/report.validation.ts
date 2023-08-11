import { ValidationError } from "../errors";
import { Validations } from "./validation";

export namespace ReportValidation {
    export function validateCategory(category: any): number {
        return Validations.validateNonNullNumber(category, { min: 1, max: 10 })
    }

    export function validateCompany(company: any): number {
        return Validations.validateNonNullNumber(company, { min: 1, max: 2 })
    }

    export function validateUnit(unit: any): number {
        return Validations.validateNonNullNumber(unit, { min: 1, max: 10 })
    }

    export function validateDatetime(date: any): Date {
        try {
            date = Date.parse(date)
        } catch (e) {
            throw new ValidationError('Provided date is not valid')
        }

        if (date > Date.now()) {
            throw new ValidationError('Provided date is greater than now')
        } else {
            return date
        }
    }

    export function validateShift(shift: any): number {
        return Validations.validateNonNullNumber(shift, { min: 1, max: 3 })
    }

    export function validateArea(area: any): number {
        return Validations.validateNonNullNumber(area, { min: 1, max: 3 })
    }

    export function validateSector(sector: any): number {
        return Validations.validateNonNullNumber(sector, { min: 1, max: 3 })
    }

    export function validateActivity(activity: any): string {
        return Validations.validateNonNullString(activity, { min: 20, max: 200 }, { toLowerCase: false })
    }

    export function validateObservation(observation: any): number {
        return Validations.validateNonNullNumber(observation, { min: 1, max: 10 })
    }

    export function validateDescription(description: any): string {
        return Validations.validateNonNullString(description, { min: 20, max: 200 }, { toLowerCase: false })
    }

    export function validateAction(action: any): string {
        return Validations.validateNonNullString(action, { min: 20, max: 200 }, { toLowerCase: false })
    }
}