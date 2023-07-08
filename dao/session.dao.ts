import { Types } from "mongoose";
import { ISession, ISessionDao, ISessionInput } from "../interfaces";
import { Session, SessionModel } from "../models";

export class SessionDao implements ISessionDao {
    async find(filter?: Object | undefined): Promise<Array<ISession>> {
        const sessions = filter ? await SessionModel.find(filter) : await SessionModel.find()
        return sessions.map((session) => parse(session))
    }

    async findOne(filter: Object): Promise<ISession | null> {
        const session = await SessionModel.findOne(filter)
        return session ? parse(session) : null
    }

    async findById(id: string): Promise<ISession | null> {
        const session = await SessionModel.findById(id)
        return session ? parse(session) : null
    }

    async insert(sessionInput: ISessionInput): Promise<ISession> {
        const session = await SessionModel.create(sessionInput)
        return parse(session.toObject())
    }

    async update(session: ISession): Promise<ISession | null> {
        const _session = await SessionModel.findByIdAndUpdate(session._id, session)
        return _session ? parse(_session) : null
    }

    async removeById(id: string): Promise<boolean> {
        return await SessionModel.findByIdAndDelete(id) ? true : false
    }
}

type SessionWithId = Session & {
    _id: Types.ObjectId
}

function parse(session: SessionWithId): ISession {
    const { _id, userId, ...rest } = session
    return {
        ...rest,
        _id: _id.toString(), 
        userId: userId.toString()
    }
}