import bcrypt from "bcrypt"
import crypto from "crypto"
import { Signin, Session, User } from "../entities";
import { HttpClientError } from "../errors";
import { SessionRepository, UserRepository, VerificationRepository } from "../interfaces/repositories";
import { LoginResponse, VerificationResponse } from "../responses";

export default class AccountService {
    constructor(
        private userRepository: UserRepository, 
        private sessionRepository: SessionRepository, 
        private verificationRepository: VerificationRepository
    ) {
        this.signup = this.signup.bind(this)
        this.signin = this.signin.bind(this)
        this.verify = this.verify.bind(this)
    }

    async signup(user: User): Promise<LoginResponse> {
        const hasUser = await this.userRepository.getByUsername(user.username) !== null
        if (hasUser) {
            throw new HttpClientError(400, 'username already registerd')
        }

        const hashPassword = await bcrypt.hash(user.password, 10)
        const newUser = await this.userRepository.create({
            ...user, 
            password: hashPassword
        })
        if (!newUser.id) {
            throw new Error('User\'s id is undefined')
        }

        const sessionPromise = this.createSession(newUser.id)
        const verificationPromise = await this.verificationRepository.create({
            uid: newUser.id, 
            token: crypto.randomBytes(32).toString('hex')
        })
        const [session] = await Promise.all([sessionPromise, verificationPromise])
        if (!session.createdAt) {
            throw new Error('Session \'s createdAt is undefined')
        }
        return {
            token: session.token, 
            expiration: this.getSessionExpiration(session.createdAt).toISOString()
        }
    }

    async signin(signin: Signin): Promise<LoginResponse> {
        const user = await this.userRepository.getByUsername(signin.username)
        if (!user) {
            throw new HttpClientError(400, 'User not registered')
        }
        if (!user.id) {
            throw new Error('User\'s id is undefined')
        }

        const isPasswordCorrect = await bcrypt.compare(signin.password, user.password)
        if (!isPasswordCorrect) {
            throw new HttpClientError(400, 'Invalid password')
        }

        const session = await this.createSession(user.id)
        if (!session.createdAt) {
            throw new Error('Session \'s createdAt is undefined')
        }
        return {
            token: session.token, 
            expiration: this.getSessionExpiration(session.createdAt).toISOString()
        }
    }

    async signout(token: string): Promise<void> {
        await this.sessionRepository.updateValidityByToken(token, false)
    }

    async signoutAll(uid: string): Promise<void> {
        await this.sessionRepository.updateValiditiesByUid(uid, false)
    }

    async getAccountVerification(uid: any): Promise<VerificationResponse> {
        const verification = await this.verificationRepository.findByUid(uid)
        if (!verification) {
            throw new HttpClientError(400, 'Verification token not found for provided user')
        }
        return {
            token: verification.token
        }
    }

    async verify(token: string, verified: boolean, accountType: number): Promise<void> {
        const verification = await this.verificationRepository.findByToken(token)
        if (!verification) {
            throw new HttpClientError(400, 'Verification token not found')
        }
        if (!verification.valid) {
            throw new HttpClientError(400, 'Verification token is not valid anymore')
        }

        const invalidateTokenPromise = this.verificationRepository.updateValidity(token, false)
        const verifyUserPromise = this.userRepository.updateVerification(verification.uid, verified)
        const updateAccountTypePromise = this.userRepository.updateAccountType(verification.uid, accountType)

        await Promise.all([
            invalidateTokenPromise, 
            verifyUserPromise, 
            updateAccountTypePromise
        ])
    }

    async checkSession(token: string): Promise<Session> {
        const session = await this.sessionRepository.getByToken(token)
        if (!session) {
            throw new HttpClientError(400, 'Session\'s token not found')
        }
        if (!session.createdAt) {
            throw new Error('Session\'s createdAt is undefined')
        }

        const sessionExpiration = this.getSessionExpiration(session.createdAt).getTime()
        if (Date.now() > sessionExpiration) {
            throw new Error('Session expired')
        }

        return session
    }

    private createSession(uid: any): Promise<Session> {
        return this.sessionRepository.create({
            uid: uid, 
            token: crypto.randomBytes(64).toString('hex')
        })
    }

    private getSessionExpiration(createdAt: Date): Date {
        return new Date(createdAt.getTime() + Date.now() + 60 * 60_000)
    }
}