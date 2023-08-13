import { HttpClientError, ValidationError } from "../errors"
import { IdValidation } from "./id.validation"
import { Validations } from "./validation"

export namespace BenchReagentValidation {
    export function validateName(name: any): string {
        return Validations.validateNonNullString(name, { min: 2, max: 30 })
    }

    export function validateLot(lot: any): string {
        return Validations.validateNonNullString(lot, { min: 5, max: 30 })
    }

    export function validateExpiration(expiration: any): Date {
        try {
            expiration = Date.parse(expiration)
        } catch (e) {
            throw new HttpClientError(400, 'Invalid date')
        }
        return expiration
    }

    export function validateMeasurement(measurment: any): number {
        return Validations.validateNonNullNumber(measurment, { min: 1, max: 2})
    }

    export function validateQuantity(quantity: any): number {
        return Validations.validateNonNullNumber(quantity, { min: 1, max: 100_000 })
    }

    export function validateInitilQuantity(initialQuantity: any): number {
        return Validations.validateNonNullNumber(initialQuantity, { min: 1, max: 100_000 })
    }

    export function validateConsumedQuantity(consumedQuantity: any): number {
        return Validations.validateNonNullNumber(consumedQuantity, { max: 100_000 })
    }

    type Component = {
        pureReagentId: any
        quantity: number | any
    }

    export function validateComponent(component: Component): Component {
        if (typeof component !== 'object') {
            throw new ValidationError('bench reagent\'s component is not an object')
        }
        const pureReagentId = IdValidation.validateId(component.pureReagentId)
        const quantity = Validations.validateNonNullNumber(component.quantity, { min: 1, max: 100_000 })
        return {
            pureReagentId: pureReagentId, 
            quantity: quantity
        }
    }

    export function validatePhoto(photo: any): string {
        return Validations.validateNonNullString(photo, { min: 10, max: 200 })
    }
}