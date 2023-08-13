import { NextFunction, Request, Response } from "express";
import PureReagentService from "../services/pure-reagent.service";
import { PureReagentDto } from "../dto";
import { pureReagentDtoValidation } from "../validations/dto";
import { HttpClientError } from "../errors";
import { PureReagent } from "../entities";

export default class PureReagentController {
    constructor(private service: PureReagentService) {
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    getAll(req: Request, res: Response, next: NextFunction) {
        this.service.getAll()
            .then(reagent => res.send(reagent))
            .catch(e => next(e))
    }

    getById(req: Request, res: Response, next: NextFunction) {
        this.service.getById(req.params.id)
            .then(reagent => reagent ? res.send(reagent) : res.status(400).end())
            .catch(e => next(e))
    }

    create(req: Request & any, res: Response, next: NextFunction) {
        const dto = new PureReagentDto()
        dto.name = req.body.name
        dto.maker = req.body.maker
        dto.lot = req.body.lot
        dto.expiration = req.body.expiration
        dto.measurement = req.body.measurement
        dto.quantity = req.body.quantity
        dto.initialQuantity = req.body.initialQuantity
        dto.consumedQuantity = req.body.consumedQuantity
        dto.fispq = req.body.fispq
        dto.photo = req.body.photo

        const errors = pureReagentDtoValidation.validate(dto)
        if (errors) {
            throw new HttpClientError(400, errors)
        }

        const pureReagent:PureReagent = {
            uid: req.locals.session.uid, 
            name: dto.name, 
            maker: dto.maker, 
            lot: dto.lot, 
            expiration: dto.expiration, 
            measurement: dto.measurement, 
            quantity: dto.quantity, 
            initialQuantity: dto.initialQuantity, 
            consumedQuantity: dto.consumedQuantity, 
            fispq: dto.fispq, 
            photo: dto.photo
        }

        this.service.create(pureReagent)
            .then(reagent => res.send(reagent))
            .catch(e => next(e))
    }

    update(req: Request, res: Response, next: NextFunction) {
        const dto = new PureReagentDto()
        dto.name = req.body.name
        dto.maker = req.body.maker
        dto.lot = req.body.lot
        dto.expiration = req.body.expiration
        dto.measurement = req.body.measurement
        dto.quantity = req.body.quantity
        dto.initialQuantity = req.body.initialQuantity
        dto.consumedQuantity = req.body.consumedQuantity
        dto.fispq = req.body.fispq
        dto.photo = req.body.photo

        const errors = pureReagentDtoValidation.validate(dto)
        if (errors) {
            throw new HttpClientError(400, errors)
        }

        const pureReagent:PureReagent = {
            name: dto.name, 
            maker: dto.maker, 
            lot: dto.lot, 
            expiration: dto.expiration, 
            measurement: dto.measurement, 
            quantity: dto.quantity, 
            initialQuantity: dto.initialQuantity, 
            consumedQuantity: dto.consumedQuantity, 
            fispq: dto.fispq, 
            photo: dto.photo
        }

        this.service.update(req.params.id, pureReagent)
            .then(reagent => res.send(reagent))
            .catch(e => next(e))
    }

    delete(req: Request, res: Response, next: NextFunction) {
        this.service.delete(req.params.id)
            .then(reagent => reagent ? res.end() : res.status(400).end())
    }
}