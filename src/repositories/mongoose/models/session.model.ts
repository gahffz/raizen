import { InferSchemaType, Schema, model } from "mongoose";

const schema = new Schema({
    uid: {
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }, 
    token: {
        type: String, 
        required: true
    }, 
    valid: {
        type: Boolean, 
        required: true, 
        default: true
    }
}, {
    timestamps: true
})

export type Session = InferSchemaType<typeof schema>

export const SessionModel = model<Session>('Session', schema)