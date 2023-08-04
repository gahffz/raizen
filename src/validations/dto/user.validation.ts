import { UserDto } from "../../dto";
import { ValidationError } from "../../errors";
import { UserValidation } from "../user.validation";

export class UserDtoValidation {
    validate(dto: UserDto): object[] | undefined {
        const errors = []

        for (const [key, value] of Object.entries(dto)) {
            try {
                switch (key) {
                    case 'name':
                        dto.name = UserValidation.validateName(value)
                        break
                    case 'surname':
                        dto.surname = UserValidation.validateSurname(value)
                        break
                    case 'username':
                        dto.username = UserValidation.validateUsername(value)
                        break
                    case 'password':
                        dto.password = UserValidation.validatePassword(value)
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