import { InferSchemaType, Schema, model } from "mongoose";

const schema = new Schema({
    uid: {
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }, 
    name: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
})

export type AreaType = InferSchemaType<typeof schema>

export const AreaTypeModel = model<AreaType>('AreaType', schema)