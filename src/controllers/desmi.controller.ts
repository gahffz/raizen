import { NextFunction, Request, Response } from "express";
import DesmiService from "../services/desmi.service";
import { DesmiDto } from "../dto";
import { Desmi } from "../entities";

export default class DesmiController {
    constructor(private service: DesmiService) {
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    getAll(req: Request, res: Response, next: NextFunction) {
        this.service.getAll()
            .then(desmis => res.send(desmis))
            .catch(e => next(e))
    }

    getById(req: Request, res: Response, next: NextFunction) {
        this.service.getById(req.params.id)
            .then(desmi => desmi ? res.send(desmi) : res.status(400).end())
            .catch(e => next(e))
    }

    create(req: Request & any, res: Response, next: NextFunction) {
        const dto = new DesmiDto()
        dto.table = req.body.table
        dto.datetime = req.body.datetime
        dto.lineOne = req.body.lineOne
        dto.reagentConsumption = req.body.reagentConsumption
        dto.cationic = req.body.cationic
        dto.anionic = req.body.anionic
        dto.mixed = req.body.mixed
        dto.comment = req.body.comment

        const desmi: Desmi = {
            uid: req.locals.session.uid, 
            table: dto.table, 
            datetime: dto.datetime, 
            lineOne: dto.lineOne, 
            reagentConsumption: dto.reagentConsumption, 
            cationic: dto.cationic, 
            anionic: dto.anionic, 
            mixed: dto.mixed, 
            comment: dto.comment, 
        }

        this.service.create(desmi)
            .then(desmi => res.send(desmi))
            .catch(e => next(e))
    }

    update(req: Request, res: Response, next: NextFunction) {
        const dto = new DesmiDto()
        dto.table = req.body.table
        dto.datetime = req.body.datetime
        dto.lineOne = req.body.lineOne
        dto.reagentConsumption = req.body.reagentConsumption
        dto.cationic = req.body.cationic
        dto.anionic = req.body.anionic
        dto.mixed = req.body.mixed
        dto.comment = req.body.comment

        const desmi: Desmi = {
            table: dto.table, 
            datetime: dto.datetime, 
            lineOne: dto.lineOne, 
            reagentConsumption: dto.reagentConsumption, 
            cationic: dto.cationic, 
            anionic: dto.anionic, 
            mixed: dto.mixed, 
            comment: dto.comment, 
        }

        this.service.update(req.params.id, desmi)
            .then(desmi => desmi ? res.send(desmi) : res.status(400).end())
            .catch(e => next(e))
    }

    delete(req: Request, res: Response, next: NextFunction) {
        this.service.delete(req.params.id)
            .then(result => result ? res.end() : res.status(400).end())
            .catch(e => next(e))
    }
}