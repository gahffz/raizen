import { getAreaDb } from "./area.dao";
import { getDesmiDb } from "./desmi.dao";
import { getIbcDb } from "./ibc.dao";
import { getReagentDb } from "./reagent.dao";
import { getReportDb } from "./report.dao";
import { getTableDb } from "./table.dao";
import { UserDao } from "./user.dao";
import { ApprovalDao } from "./approval.dao";
import { SessionDao } from "./session.dao";

const areaDb = getAreaDb()
const desmiDb = getDesmiDb()
const ibcDb = getIbcDb()
const reagentDb = getReagentDb()
const reportDb = getReportDb()
const tableDb = getTableDb()

export {
    areaDb, desmiDb, ibcDb, reagentDb, reportDb, tableDb, UserDao, ApprovalDao, SessionDao
}