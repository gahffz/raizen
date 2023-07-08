export type ICreateUserResult = {
    uid: string,
    session: {
        token: string,
        validity: string
    }
}