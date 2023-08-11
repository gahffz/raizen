import { AreaFileDto } from "../../dto";
import { ValidationError } from "../../errors";
import { AreaFileValidation } from "../area-file.validation";

export default class AreaFileDtoValidation {
    validate(dto: AreaFileDto): object[] | undefined {
        const errors = []

        for (const [key, value] of Object.entries(dto)) {
            try {
                switch (key) {
                    case 'filename':
                        dto.filename = AreaFileValidation.validateFilename(value)
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