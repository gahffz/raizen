import { ReportDto } from "../../dto";
import { ValidationError } from "../../errors";
import { ReportValidation } from "../report.validation";

export default class ReportDtoValidation {
    validate(dto: ReportDto): object[] | undefined {
        const errors = []

        for (const [key, value] of Object.entries(dto)) {
            try {
                switch (key) {
                    case 'category':
                        ReportValidation.validateCategory(value)
                        break
                    case 'company':
                        ReportValidation.validateCompany(value)
                        break
                    case 'unit':
                        ReportValidation.validateUnit(value)
                        break
                    case 'datetime':
                        ReportValidation.validateDatetime(value)
                        break
                    case 'shift':
                        ReportValidation.validateShift(value)
                        break
                    case 'area':
                        ReportValidation.validateArea(value)
                        break
                    case 'sector':
                        ReportValidation.validateSector(value)
                        break
                    case 'activity':
                        ReportValidation.validateAction(value)
                        break
                    case 'observation':
                        ReportValidation.validateObservation(value)
                        break
                    case 'description':
                        ReportValidation.validateDescription(value)
                        break
                    case 'action':
                        ReportValidation.validateAction(value)
                        break
                    default:
                        throw new Error('Unknown key ' + key)
                }
            } catch (e) {
                if (e instanceof ValidationError) {
                    errors.push({
                        field: key, 
                        value: value, 
                        error: e.message
                    })
                } else {
                    throw e
                }
            }
        }

        if (errors.length > 0) return errors
    }
}