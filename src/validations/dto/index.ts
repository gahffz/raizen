import SigninDtoValidation from "./signin.validation";
import UserDtoValidation from "./user.validation";
import VerificationDtoValidation from "./verification.validation";

const signinDtoValidation = new SigninDtoValidation
const userDtoValidation = new UserDtoValidation()
const verificationDtoValidation = new VerificationDtoValidation()

export {
    signinDtoValidation, 
    userDtoValidation, 
    verificationDtoValidation
}