import { InferSchemaType, Schema, model } from "mongoose";

const schema = new Schema({
    uid: {
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }, 
    category: {
        type: Number, 
        required: true
    }, 
    company: {
        type: Number, 
        required: true
    }, 
    unit: {
        type: Number, 
        required: true
    }, 
    datetime: {
        type: Date, 
        required: true
    }, 
    shift: {
        type: Number, 
        required: true
    }, 
    area: {
        type: Number, 
        required: true
    }, 
    sector: {
        type: Number, 
        required: true
    }, 
    activity: {
        type: String, 
        required: true
    }, 
    observation: {
        type: Number, 
        required: true
    }, 
    description: {
        type: String, 
        required: true
    }, 
    action: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
})

export type Report = InferSchemaType<typeof schema>

export const ReportModel = model<Report>('Report', schema)