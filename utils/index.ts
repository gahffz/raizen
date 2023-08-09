import { Validator } from "./validator"
import { HttpError } from "./error"

const validator = new Validator()

export {
    validator, 
    HttpError, 
}