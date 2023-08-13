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
    }, 
    maker: {
        type: String, 
        required: true
    }, 
    lot: {
        type: String, 
        required: true
    }, 
    expiration: {
        type: Date, 
        required: true
    }, 
    measurement: {
        type: Number, 
        required: true
    }, 
    quantity: {
        type: Number, 
        required: true
    }, 
    initialQuantity: {
        type: Number, 
        required: true
    }, 
    consumedQuantity: {
        type: Number, 
        required: true, 
        default: 0
    }, 
    fispq: {
        type: String
    }, 
    photo: {
        type: String
    }
}, {
    timestamps: true
})

export type PureReagent = InferSchemaType<typeof schema>

export const PureReagentModel = model<PureReagent>('PureReagent', schema)