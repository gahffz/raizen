export type IAccessAccountResult = {
    uid: string,
    session: {
        token: string,
        validity: string
    }
}