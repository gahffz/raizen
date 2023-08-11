import { AreaTypeDto } from "../../dto";
import { ValidationError } from "../../errors";
import { AreaTypeValidation } from "../area-type.validation";

export default class AreaTypeDtoValidation {
    validate(dto: AreaTypeDto): object[] | undefined {
        const errors = []

        for (const [key, value] of Object.entries(dto)) {
            try {
                switch (key) {
                    case 'name':
                        dto.name = AreaTypeValidation.validateName(value)
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