import { accountService } from "../services";
import ErrorsMiddleware from "./errors.middleware";
import SessionMiddleware from "./session.middleware";

const errorMiddleware = new ErrorsMiddleware()
const sessionMiddleware = new SessionMiddleware(accountService)

const middleware = {
    error: errorMiddleware.onError, 
    session: sessionMiddleware.validate
}

export default middleware