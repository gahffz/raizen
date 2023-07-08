import { IUser, IUserDao, IUserInput } from "../interfaces"
import { User, UserModel } from "../models"
import { Types } from "mongoose"

export class UserDao implements IUserDao {
    async find(filter?: Object): Promise<Array<IUser>> {
        const users = filter? await UserModel.find(filter) : await UserModel.find()
        return users.map((user) => parse(user))
    }

    async findOne(filter: Object): Promise<IUser|null> {
        const user = await UserModel.findOne(filter)
        return user ? parse(user) : null
    }

    async findById(id: string): Promise<IUser|null> {
        const user = await UserModel.findById(id)
        return user ? parse(user) : null
    }

    async insert(user: IUserInput): Promise<IUser> {
        const _user = await UserModel.create(user)
        return parse(_user.toObject())
    }

    async update(user: IUser): Promise<IUser|null> {
        const _user = await UserModel.findByIdAndUpdate(user._id, user, { new: true })
        return _user ? parse(_user) : null
    }

    async removeById(id: string): Promise<boolean> {
        return await UserModel.findByIdAndDelete(id) ? true : false
    }
}

type UserWithId = User & {
    _id: Types.ObjectId
}

function parse(user: UserWithId): IUser {
    const { _id, ...rest } = user
    return {
        ...rest,
        _id: _id.toString()
    }
}