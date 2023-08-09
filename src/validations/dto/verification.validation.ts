import { VerificationDto } from "../../dto";
import { ValidationError } from "../../errors";
import { VerificationValidation } from "../verification.validation";

export default class VerificationDtoValidation {
    validate(dto: VerificationDto): object[] | undefined {
        const errors = []

        for (const [key, value] of Object.entries(dto)) {
            try {
                switch (key) {
                    case 'token':
                        VerificationValidation.validateToken(value)
                        break
                    case 'accountType':
                        VerificationValidation.validateAccountType(value)
                        break
                    case 'verified':
                        VerificationValidation.validateVerified(value)
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