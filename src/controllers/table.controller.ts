import { NextFunction, Request, Response } from "express";
import TableService from "../services/table.service";
import { TableDto } from "../dto";
import { Table } from "../entities";

export default class TableController {
    constructor(private service: TableService) {
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    getAll(req: Request, res: Response, next: NextFunction) {
        let type

        switch (req.query.type) {
            case 'pure':
                type = 1
                break;
            case 'bench':
                type = 2
                break
            default:
                type = 1
        }

        this.service.getAllByType(type)
            .then(tables => res.send(tables))
            .catch(e => next(e))
    }

    getById(req: Request, res: Response, next: NextFunction) {
        this.service.getById(req.params.id)
            .then(table => table ? res.send(table) : res.status(400).end())
            .catch(e => next(e))
    }

    create(req: Request & any, res: Response, next: NextFunction) {
        const dto = new TableDto()
        dto.title = req.body.title
        dto.type = req.body.type

        const table: Table = {
            uid: req.locals.session.uid, 
            title: dto.title, 
            type: dto.type
        }

        this.service.create(table)
            .then(table => res.send(table))
            .catch(e => next(e))
    }

    update(req: Request, res: Response, next: NextFunction) {
        const dto = new TableDto()
        dto.title = req.body.title
        dto.type = req.body.type

        const table: Table = {
            title: dto.title, 
            type: dto.type
        }

        this.service.update(req.params.id, table)
            .then(table => res.send(table))
            .catch(e => next(e))
    }

    delete(req: Request, res: Response, next: NextFunction) {
        this.service.delete(req.params.id)
            .then(result => result ? res.end() : res.status(400).end())
            .catch(e => next(e))
    }
}