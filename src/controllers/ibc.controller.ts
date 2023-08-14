import { NextFunction, Request, Response } from "express";
import IbcService from "../services/ibc.service";
import { IbcDto } from "../dto";
import { Ibc } from "../entities";

export default class IbcController {
    constructor(private service: IbcService) {
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    getAll(req: Request, res: Response, next: NextFunction) {
        this.service.getAll()
            .then(ibcs => res.send(ibcs))
            .catch(e => next(e))
    }

    getById(req: Request, res: Response, next: NextFunction) {
        this.service.getById(req.params.id)
            .then(ibc => ibc ? res.send(ibc) : res.status(400).end())
            .catch(e => next(e))
    }

    create(req: Request & any, res: Response, next: NextFunction) {
        const dto = new IbcDto()
        dto.table = req.body.table
        dto.input = req.body.input
        dto.provider = req.body.provider
        dto.quantity = req.body.quantity
        dto.requestedQuantity = req.body.requestedQuantity
        dto.returnedQuantity = req.body.returnedQuantity
        dto.receiptDate = req.body.receiptDate
        dto.returnDate = req.body.returnDate
        dto.transaction = req.body.transaction
        dto.receiver = req.body.receiver
        dto.returner = req.body.returner
        dto.receiverReturner = req.body.receiverReturner

        const ibc: Ibc = {
            uid: req.locals.session.uid, 
            table: dto.table,
            input: dto.input,
            provider: dto.provider,
            quantity: dto.quantity,
            requestedQuantity: dto.requestedQuantity,
            returnedQuantity: dto.returnedQuantity,
            receiptDate: dto.receiptDate,
            returnDate: dto.returnDate,
            transaction: dto.transaction,
            receiver: dto.receiver,
            returner: dto.returner,
            receiverReturner: dto.receiverReturner,
        }

        this.service.create(ibc)
            .then(ibc => res.send(ibc))
            .catch(e => next(e))
    }

    update(req: Request, res: Response, next: NextFunction) {
        const dto = new IbcDto()
        dto.table = req.body.table
        dto.input = req.body.input
        dto.provider = req.body.provider
        dto.quantity = req.body.quantity
        dto.requestedQuantity = req.body.requestedQuantity
        dto.returnedQuantity = req.body.returnedQuantity
        dto.receiptDate = req.body.receiptDate
        dto.returnDate = req.body.returnDate
        dto.transaction = req.body.transaction
        dto.receiver = req.body.receiver
        dto.returner = req.body.returner
        dto.receiverReturner = req.body.receiverReturner

        const ibc: Ibc = {
            table: dto.table,
            input: dto.input,
            provider: dto.provider,
            quantity: dto.quantity,
            requestedQuantity: dto.requestedQuantity,
            returnedQuantity: dto.returnedQuantity,
            receiptDate: dto.receiptDate,
            returnDate: dto.returnDate,
            transaction: dto.transaction,
            receiver: dto.receiver,
            returner: dto.returner,
            receiverReturner: dto.receiverReturner,
        }

        this.service.update(req.params.id, ibc)
            .then(ibc => ibc ? res.send(ibc) : res.status(400).end())
            .catch(e => next(e))
    }

    delete(req: Request, res: Response, next: NextFunction) {
        this.service.delete(req.params.id)
            .then(result => result ? res.end() : res.status(400).end())
            .catch(e => next(e))
    }
}