import { NextFunction, Request, Response } from "express";

export interface IUserController {
    createAccount(req: Request, res: Response, next: NextFunction): void
}