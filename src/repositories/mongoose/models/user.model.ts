import { InferSchemaType, Schema, model } from "mongoose";

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
    verified: {
        type: Boolean, 
        required: true, 
        default: false
    }
}, {
    timestamps: true
})

type User = InferSchemaType<typeof userSchema>

const UserModel = model<User>('User', userSchema)

export {
    User, UserModel
}