import { InferSchemaType, Schema, model } from "mongoose";

const schema = new Schema({
    uid: {
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }, 
    table: {
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'Table'
    }, 
    input: {
        type: String
    }, 
    provider: {
        type: String
    }, 
    quantity: {
        type: Number
    }, 
    requestedQuantity: {
        type: Number
    }, 
    returnedQuantity: {
        type: Number
    }, 
    receiptDate: {
        type: Date
    }, 
    returnDate: {
        type: Date
    }, 
    transaction: {
        type: String
    }, 
    receiver: {
        type: String
    }, 
    returner: {
        type: String
    }, 
    receiverReturner: {
        type: String
    }
}, {
    timestamps: true
})

export type Ibc = InferSchemaType<typeof schema>

export const IbcModel = model<Ibc>('Ibc', schema)