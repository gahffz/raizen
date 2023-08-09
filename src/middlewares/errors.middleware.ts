import { NextFunction, Request, Response } from "express";
import { HttpClientError } from "../errors";

export default class ErrorsMiddleware {
    onError(error: Error, req: Request, res: Response, next: NextFunction) {
        if (error instanceof HttpClientError) {
            res.status(error.status).send(error.message)
            return
        }

        res.status(500).json({ error: 'Internal Error' })
        console.error(error)
    }
}