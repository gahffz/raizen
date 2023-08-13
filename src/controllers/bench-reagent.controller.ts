import { NextFunction, Request, Response } from "express";
import BenchReagentService from "../services/bench-reagent.service";
import { BenchReagentDto } from "../dto";
import { benchReagentDtoValidation } from "../validations/dto";
import { BenchReagent } from "../entities";
import { HttpClientError } from "../errors";

export default class BenchReagentController {
    constructor(private service: BenchReagentService) {
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    getAll(req: Request, res: Response, next: NextFunction) {
        this.service.getAll()
            .then(reagents => res.send(reagents))
            .catch(e => next(e))
    }

    getById(req: Request, res: Response, next: NextFunction) {
        this.service.getById(req.params.id)
            .then(reagent => reagent ? res.send(reagent) : res.status(400).end())
            .catch(e => next(e))
    }

    create(req: Request & any, res: Response, next: NextFunction) {
        const dto = new BenchReagentDto()
        dto.name = req.body.name
        dto.lot = req.body.lot
        dto.expiration = req.body.expiration
        dto.measurement = req.body.measurement
        dto.quantity = req.body.quantity
        dto.initialQuantity = req.body.initialQuantity
        dto.consumedQuantity = req.body.consumedQuantity
        dto.photo = req.body.photo

        const errors = benchReagentDtoValidation.validate(dto)

        if (errors) {
            throw new HttpClientError(400, errors)
        }

        const benchReagent: BenchReagent = {
            uid: req.locals.session.uid, 
            name: dto.name, 
            lot: dto.lot, 
            expiration: dto.expiration, 
            measurement: dto.measurement, 
            quantity: dto.quantity, 
            initialQuantity: dto.initialQuantity, 
            consumedQuantity: dto.consumedQuantity, 
            photo: dto.photo
        }

        this.service.create(benchReagent)
            .then(reagent => res.send(reagent))
            .catch(e => next(e))
    }

    update(req: Request, res: Response, next: NextFunction) {
        const dto = new BenchReagentDto()
        dto.name = req.body.name
        dto.lot = req.body.lot
        dto.expiration = req.body.expiration
        dto.measurement = req.body.measurement
        dto.quantity = req.body.quantity
        dto.initialQuantity = req.body.initialQuantity
        dto.consumedQuantity = req.body.consumedQuantity
        dto.photo = req.body.photo

        const errors = benchReagentDtoValidation.validate(dto)

        if (errors) {
            throw new HttpClientError(400, errors)
        }

        const benchReagent: BenchReagent = {
            name: dto.name, 
            lot: dto.lot, 
            expiration: dto.expiration, 
            measurement: dto.measurement, 
            quantity: dto.quantity, 
            initialQuantity: dto.initialQuantity, 
            consumedQuantity: dto.consumedQuantity, 
            photo: dto.photo
        }

        this.service.update(req.params.id, benchReagent)
            .then(reagent => reagent ? res.send(reagent) : res.status(400).end())
            .catch(e => next(e))
    }

    delete(req: Request, res: Response, next: NextFunction) {
        this.service.delete(req.params.id)
            .then(result => result ? res.end() : res.status(400).end())
            .catch(e => next(e))
    }
}