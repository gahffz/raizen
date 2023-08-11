import AreaFileDtoValidation from "./area-file.validation";
import AreaTypeDtoValidation from "./area-type.validation";
import AreaDtoValidation from "./area.validation";
import ReportDtoValidation from "./report.valiation";
import SigninDtoValidation from "./signin.validation";
import UserDtoValidation from "./user.validation";
import VerificationDtoValidation from "./verification.validation";

const areaDtoValidation = new AreaDtoValidation()
const areaFileDtoValidation = new AreaFileDtoValidation()
const areaTypeDtoValidation = new AreaTypeDtoValidation()
const reportDtoValidation = new ReportDtoValidation()
const signinDtoValidation = new SigninDtoValidation
const userDtoValidation = new UserDtoValidation()
const verificationDtoValidation = new VerificationDtoValidation()

export {
    areaDtoValidation, 
    areaFileDtoValidation, 
    areaTypeDtoValidation, 
    reportDtoValidation, 
    signinDtoValidation, 
    userDtoValidation, 
    verificationDtoValidation
}