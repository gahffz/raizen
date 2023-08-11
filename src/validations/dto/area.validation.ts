import { AreaDto } from "../../dto"
import { ValidationError } from "../../errors"
import { AreaValidation } from "../area.validation"
import { IdValidation } from "../id.validation"

export default class AreaDtoValidation {
    validate(dto: AreaDto): object[] | undefined {
        const errors = []

        for (const [key, value] of Object.entries(dto)) {
            try {
                switch (key) {
                    case 'type':
                        dto.type = IdValidation.validateId(value)
                        break
                    case 'details':
                        dto.details = AreaValidation.validateDetails(value)
                        break
                    case 'photos':
                        // TODO
                        break
                    case 'files':
                        // TODO
                        break
                    default:
                        throw new Error('Unknown key ' + key)
                }
            } catch (error) {
                if (error instanceof ValidationError) {
                    errors.push({
                        field: key, 
                        value: value, 
                        error: error.message
                    })
                } else {
                    throw error
                }
            }
        }

        if (errors.length > 0) {
            return errors
        }
    }
}