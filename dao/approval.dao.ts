import { Types } from "mongoose";
import { IApproval, IApprovalDao, IApprovalInput } from "../interfaces";
import { Approval, ApprovalModel } from "../models";

export class ApprovalDao implements IApprovalDao {
    async find(filter?: Object | undefined): Promise<Array<IApproval>> {
        const approvals = filter? await ApprovalModel.find(filter) : await ApprovalModel.find()
        return approvals.map((approval) => parse(approval))
    }

    async findOne(filter: Object): Promise<IApproval | null> {
        const approval = await ApprovalModel.findOne(filter)
        return approval ? parse(approval) : null
    }

    async findById(id: String): Promise<IApproval | null> {
        const approval = await ApprovalModel.findById(id)
        return approval ? parse(approval) : null
    }

    async insert(approvalInput: IApprovalInput): Promise<IApproval> {
        const approval = await ApprovalModel.create(approvalInput)
        return parse(approval.toObject())
    }

    async update(approval: IApproval): Promise<IApproval | null> {
        const _approval = await ApprovalModel.findByIdAndUpdate(approval)
        return _approval ? parse(_approval) : null
    }
    async deleteById(id: string): Promise<boolean> {
        return await ApprovalModel.findByIdAndDelete(id) ? true : false
    }
    
}

type ApprovalWithId = Approval & {
    _id: Types.ObjectId
}

function parse(approval: ApprovalWithId): IApproval {
    const { _id, userId, ...rest } = approval
    return {
        ...rest,
        _id: _id.toString(),
        userId: userId.toString()
    }
}