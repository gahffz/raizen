import { NextFunction, Request, Response } from "express";

export interface IApprovalController {
    approveUser(req: Request, res: Response, next: NextFunction): void
}