import database from "../repositories";
import AccountService from "./account.service";
import AreaService from "./area.service";
import BenchReagentService from "./bench-reagent.service";
import PureReagentService from "./pure-reagent.service";
import ReportService from "./report.service";
import SessionService from "./session.service";
import UserService from "./user.service";
import VerificationService from "./verification.service";

const accountService = new AccountService(database.user, database.session, database.verification)
const areaService = new AreaService(database.area, database.areaType)
const benchReagentService = new BenchReagentService(database.benchReagent)
const pureReagentService = new PureReagentService(database.pureReagent)
const reportService = new ReportService(database.report)
const sessionService = new SessionService(database.session)
const userService = new UserService(database.user)
const verificationService = new VerificationService(database.verification)

export {
    accountService, 
    areaService, 
    benchReagentService, 
    pureReagentService, 
    reportService, 
    userService, 
    sessionService, 
    verificationService
}