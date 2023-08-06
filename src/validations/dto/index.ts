import { UserDtoValidation } from "./user.validation";
import VerificationDtoValidation from "./verification.validation";

const userDtoValidation = new UserDtoValidation()
const verificationDtoValidation = new VerificationDtoValidation()

export {
    userDtoValidation, 
    verificationDtoValidation
}