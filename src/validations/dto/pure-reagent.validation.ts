import { PureReagentDto } from "../../dto";
import { ValidationError } from "../../errors";
import { PureReagentValidation } from "../pure-reagent.validation";

export default class PureReagentDtoValidation {
    validate(dto: PureReagentDto): object[] | undefined {
        const errors = []

        for (const [key, value] of Object.entries(dto)) {
            try {
                switch (key) {
                    case 'name':
                        PureReagentValidation.validateName(value)
                        break
                    case 'maker':
                        PureReagentValidation.validateMaker(value)
                        break
                    case 'lot':
                        PureReagentValidation.validateLot(value)
                        break
                    case 'expiration':
                        PureReagentValidation.validateExpiration(value)
                        break
                    case 'measurement':
                        PureReagentValidation.validateMeasurement(value)
                        break
                    case 'quantity':
                        PureReagentValidation.validateQuantity(value)
                        break
                    case 'initialQuantity':
                        PureReagentValidation.validateInitilQuantity(value)
                        break
                    case 'consumedQuantity':
                        PureReagentValidation.validateConsumedQuantity(value)
                        break
                    case 'fispq':
                        PureReagentValidation.validateFispq(value)
                        break
                    case 'photo':
                        PureReagentValidation.validatePhoto(value)
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