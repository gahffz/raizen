import { InferSchemaType, Schema, model } from "mongoose"

const userSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    surname: { 
        type: String, 
        required: true 
    },
    username: { 
        type: String, 
        required: true
    },
    password: { 
        type: String, 
        required: true
    },
    accountType: { 
        type: Number, 
        required: true,
        default: 1
    },
    phone: { 
        type: String, 
        required: false
    },
    gender: { 
        type: Number, 
        required: false
    },
    photo: { 
        type: String, 
        required: false
    },
    unit: { 
        type: Number, 
        required: true
    },
    sector: { 
        type: Number, 
        required: true
    },
    shift: { 
        type: Number, 
        required: false
    },
    approved: {
        type: Boolean,
        required: true,
        default: false
    },
    deleted: { 
        type: Boolean, 
        required: true, 
        default: false
    }
}, {
    timestamps: true
})

export type User = InferSchemaType<typeof userSchema>

export const UserModel = model<User>('User', userSchema)