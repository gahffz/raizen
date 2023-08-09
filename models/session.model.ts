import { InferSchemaType, Schema, model } from "mongoose";

const sessionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true, 
        ref: 'User'
    },
    token: {
        type: String, 
        required: true
    },
    invalidated: {
        type: Boolean,
        required: true, 
        default: false
    }
}, {
    timestamps: true
})

export type Session = InferSchemaType<typeof sessionSchema>

export const SessionModel = model<Session>('Session', sessionSchema)