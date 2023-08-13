import { InferSchemaType, Schema, model } from "mongoose";

const componentSchema = new Schema({
    pureReagent: {
        type: Schema.Types.ObjectId, 
        required: true
    }, 
    quantity: {
        type: Number, 
        required: true
    }
})

export type BenchReagentCompoent = InferSchemaType<typeof componentSchema>

const benchReagentSchema = new Schema({
    uid: {
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }, 
    name: {
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
    components: {
        type: [componentSchema], 
        required: true, 
        default: []
    }, 
    photo: {
        type: String
    }
})

export type BenchReagent = InferSchemaType<typeof benchReagentSchema>

export const BenchReagentModel = model<BenchReagent>('BenchReagent', benchReagentSchema)