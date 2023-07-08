import { InferSchemaType, Schema, model } from "mongoose";

const approvalSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }, 
    token: {
        type: String, 
        required: true
    },
}, {
    timestamps: true
})

export type Approval = InferSchemaType<typeof approvalSchema>

export const ApprovalModel = model<Approval>('Approval', approvalSchema)