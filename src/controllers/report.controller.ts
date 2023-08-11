import { NextFunction, Request, Response } from "express";
import ReportService from "../services/report.service";
import { ReportDto } from "../dto";
import { reportDtoValidation } from "../validations/dto";
import { HttpClientError } from "../errors";
import { Report } from "../entities";

export default class ReportController {
    constructor(private service: ReportService) {
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    getAll(req: Request, res: Response, next: NextFunction) {
        this.service.getAll()
            .then(reports => res.send(reports))
            .catch(e => next(e))
    }

    getById(req: Request, res: Response, next: NextFunction) {
        this.service.getById(req.params.id)
            .then(report => report ? res.send(report) : res.status(400).end())
            .catch(e => next(e))
    }

    create(req: Request & any, res: Response, next: NextFunction) {
        const dto = new ReportDto()
        dto.category = req.body.category
        dto.company = req.body.company
        dto.unit = req.body.unit
        dto.datetime = req.body.datetime
        dto.shift = req.body.shift
        dto.area = req.body.area
        dto.sector = req.body.sector
        dto.activity = req.body.activity
        dto.observation = req.body.observation
        dto.description = req.body.description
        dto.action = req.body.activity

        const errors = reportDtoValidation.validate(dto)
        if (errors) {
            throw new HttpClientError(400, errors)
        }

        const report: Report = {
            uid: req.locals.session.uid, 
            category: dto.category, 
            company: dto.company, 
            unit: dto.unit, 
            datetime: dto.datetime, 
            shift: dto.shift, 
            area: dto.area, 
            sector: dto.sector, 
            activity: dto.activity, 
            observation: dto.observation, 
            description: dto.description, 
            action: dto.activity
        }

        this.service.create(report)
            .then(report => res.send(report))
            .catch(e => next(e))
    }

    update(req: Request, res: Response, next: NextFunction) {
        const dto = new ReportDto()
        dto.category = req.body.category
        dto.company = req.body.company
        dto.unit = req.body.unit
        dto.datetime = req.body.datetime
        dto.shift = req.body.shift
        dto.area = req.body.area
        dto.sector = req.body.sector
        dto.activity = req.body.activity
        dto.observation = req.body.observation
        dto.description = req.body.description
        dto.action = req.body.activity

        const errors = reportDtoValidation.validate(dto)
        if (errors) {
            throw new HttpClientError(400, errors)
        }

        const report: Report = {
            category: dto.category, 
            company: dto.company, 
            unit: dto.unit, 
            datetime: dto.datetime, 
            shift: dto.shift, 
            area: dto.area, 
            sector: dto.sector, 
            activity: dto.activity, 
            observation: dto.observation, 
            description: dto.description, 
            action: dto.activity
        }

        this.service.update(req.params.id, report)
            .then(report => res.send(report))
            .catch(e => next(e))
    }

    delete(req: Request, res: Response, next: NextFunction) {
        this.service.delete(req.params.id)
            .then(deleted => deleted ? res.end() : res.status(400).end())
            .catch(e => next(e))
    }
}