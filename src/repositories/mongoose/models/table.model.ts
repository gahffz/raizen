import { InferSchemaType, Schema, model } from "mongoose";

const schema = new Schema({
    uid: {
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }, 
    title: {
        type: String, 
        required: true
    }, 
    type: {
        type: Number, 
        required: true
    }
}, {
    timestamps: true
})

export type Table = InferSchemaType<typeof schema>

export const TableModel = model<Table>('Table', schema)