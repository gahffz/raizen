import { InferSchemaType, Schema, model } from "mongoose";

const fileSchema = new Schema({
    filename: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
})

export type AreaFile = InferSchemaType<typeof fileSchema>

const areaSchema = new Schema({
    uid: {
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }, 
    type: {
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'AreaType'
    }, 
    details: {
        type: String, 
        required: true
    }, 
    photos: {
        type: [fileSchema], 
        required: true, 
        default: []
    }, 
    files: {
        type: [fileSchema], 
        required: true, 
        default: []
    }
}, {
    timestamps: true
})

export type Area = InferSchemaType<typeof areaSchema>

export const AreaModel = model<Area>('Area', areaSchema)