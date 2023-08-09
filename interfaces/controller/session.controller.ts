import { NextFunction, Request, Response } from "express";

export interface ISessionController {
    validateSession(req: Request, res: Response, next: NextFunction): void
}