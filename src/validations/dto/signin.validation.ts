import SigninDto from "../../dto/signin.dto";
import { ValidationError } from "../../errors";
import { UserValidation } from "../user.validation";

export default class SigninDtoValidation {
    validate(dto: SigninDto): object[] | undefined {
        const errors = []

        for (const [key, value] of Object.entries(dto)) {
            try {
                switch (key) {
                    case 'username':
                        UserValidation.validateUsername(value)
                        break
                    case 'password':
                        UserValidation.validatePassword(value)
                        break
                    default:
                        throw new Error('Unknown key ' + key)
                }
            } catch (error) {
                if (error instanceof ValidationError) {
                    errors.push({
                        input: key, 
                        value: value, 
                        error: error
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