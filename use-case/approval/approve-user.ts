import { IApprovalDao, IApproveUserUseCase, IUserDao } from "../../interfaces";
import { HttpError } from "../../utils";

export class ApproveUserUseCase implements IApproveUserUseCase {
    private userDao: IUserDao
    private approvalDao: IApprovalDao

    constructor (userDao: IUserDao, approvalDao: IApprovalDao) {
        this.userDao = userDao
        this.approvalDao = approvalDao
    }

    async execute(adminId: string, token: string, accountType: number, isTrue: boolean): Promise<void> {
        const approval = await this.approvalDao.findOne({ token: token })

        if (approval == null) {
            throw new HttpError({ status: 200, message: "Token not found" })
        } else if (approval.invalidated) {
            throw new HttpError({ status: 200, message: "This token is not more available" })
        }

        const user = await this.userDao.findOne({ _id: approval.userId })

        if (user == null) {
            throw new HttpError({ status: 200, message: "User not found" })
        }

        user.accountType = accountType
        user.approved = isTrue
        
        approval.invalidated = true

        await Promise.all([this.userDao.update(user), this.approvalDao.update(approval)])
    }
}