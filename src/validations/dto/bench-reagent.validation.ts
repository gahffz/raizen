import { BenchReagentDto } from "../../dto";
import { ValidationError } from "../../errors";
import { BenchReagentValidation } from "../bench-reagent.validation";

export default class BenchReagentDtoValidation {
    validate(dto: BenchReagentDto): object[] | undefined {
        const errors = []

        for (const [key, value] of Object.entries(dto)) {
            try {
                switch (key) {
                    case 'name':
                        BenchReagentValidation.validateName(value)
                        break
                    case 'lot':
                        BenchReagentValidation.validateLot(value)
                        break
                    case 'expiration':
                        BenchReagentValidation.validateExpiration(value)
                        break
                    case 'measurement':
                        BenchReagentValidation.validateMeasurement(value)
                        break
                    case 'quantity':
                        BenchReagentValidation.validateQuantity(value)
                        break
                    case 'initialQuantity':
                        BenchReagentValidation.validateInitilQuantity(value)
                        break
                    case 'consumedQuantity':
                        BenchReagentValidation.validateConsumedQuantity(value)
                        break
                    case 'components':
                        value.map((value: any) => BenchReagentValidation.validateComponent(value))
                        break
                    case 'photo':
                        BenchReagentValidation.validatePhoto(value)
                        break
                    default:
                        throw new Error('Unknown key ' + key)
                }
            } catch (e) {
                if (e instanceof ValidationError) {
                    errors.push({
                        key: key, 
                        value: value, 
                        error: e
                    })
                } else {
                    throw e
                }
            }
        }

        if (errors.length > 0) return errors
    }
}