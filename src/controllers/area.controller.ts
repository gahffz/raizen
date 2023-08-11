import { NextFunction, Request, Response } from "express";
import AreaService from "../services/area.service";
import { AreaDto, AreaTypeDto } from "../dto";
import { areaDtoValidation, areaTypeDtoValidation } from "../validations/dto";
import { HttpClientError } from "../errors";
import { Area, AreaType } from "../entities";

export default class AreaController {
    constructor(private areaService: AreaService) {
        this.getAreaTypes = this.getAreaTypes.bind(this)
        this.getAreaType = this.getAreaType.bind(this)
        this.addAreaType = this.addAreaType.bind(this)
        this.updateAreaType = this.updateAreaType.bind(this)
        this.deleteAreaType = this.deleteAreaType.bind(this)

        this.getAreas = this.getAreas.bind(this)
        this.getArea = this.getArea.bind(this)
        this.createArea = this.createArea.bind(this)
        this.updateArea = this.updateArea.bind(this)
        this.deleteArea = this.deleteArea.bind(this)
    }

    getAreaTypes(req: Request, res: Response, next: NextFunction) {
        this.areaService.getAllAreaTypes()
            .then(areaTypes => res.send(areaTypes))
            .catch(e => next(e))
    }

    getAreaType(req: Request, res: Response, next: NextFunction) {
        this.areaService.getAreaType(req.params.id)
            .then(areaType => {
                areaType ? res.send(areaType) : res.status(400).end()
            })
            .catch(e => next(e))
    }

    addAreaType(req: Request & any, res: Response, next: NextFunction) {
        const dto = new AreaTypeDto()
        dto.name = req.body.name

        const errors = areaTypeDtoValidation.validate(dto)
        if (errors) {
            throw new HttpClientError(400, errors)
        }

        const areaType: AreaType = {
            uid: req.locals.session.uid, 
            name: dto.name
        }
        this.areaService.createAreaType(areaType)
            .then(areaType => res.send(areaType))
            .catch(e => next(e))
    }

    updateAreaType(req: Request, res: Response, next: NextFunction) {
        const dto = new AreaTypeDto()
        dto.name = req.body.name

        const errors = areaTypeDtoValidation.validate(dto)
        if (errors) {
            throw new HttpClientError(400, errors)
        }

        const areaType: AreaType = {
            name: dto.name
        }
        this.areaService.updateAreaType(req.params.id, areaType)
            .then(areaType => res.send(areaType))
            .catch(e => next(e))
    }

    deleteAreaType(req: Request, res: Response, next: NextFunction) {
        this.areaService.deleteAreaType(req.params.id)
            .then(areaType => {
                areaType ? res.end() : res.status(400).end()
            })
            .catch(e => next(e))
    }

    getAreas(req: Request, res: Response, next: NextFunction) {
        this.areaService.getAreas()
            .then(areas => res.send(areas))
            .catch(e => next(e))
    }

    getArea(req: Request, res: Response, next: NextFunction) {
        this.areaService.getArea(req.params.id)
            .then(area => {
                area ? res.send(area) : res.status(400).end()
            })
            .catch(e => next(e))
    }

    createArea(req: Request & any, res: Response, next: NextFunction) {
        const dto = new AreaDto()
        dto.type = req.body.type
        dto.details = req.body.details
        dto.photos = req.body.photos
        dto.files = req.body.files

        const errors = areaDtoValidation.validate(dto)
        if (errors) {
            throw new HttpClientError(400, errors)
        }

        const area: Area = {
            uid: req.locals.session.uid, 
            type: dto.type, 
            details: dto.details, 
            photos: dto.photos, 
            files: dto.files
        }
        this.areaService.createArea(area)
            .then(area => res.send(area))
            .catch(e => next(e))
    }

    updateArea(req: Request, res: Response, next: NextFunction) {
        const dto = new AreaDto()
        dto.type = req.body.type
        dto.details = req.body.details
        dto.photos = req.body.photos
        dto.files = req.body.files

        const errors = areaDtoValidation.validate(dto)
        if (errors) {
            throw new HttpClientError(400, errors)
        }

        const area: Area = {
            type: dto.type, 
            details: dto.details, 
            photos: dto.photos, 
            files: dto.files
        }
        this.areaService.updateArea(req.params.id, area)
            .then(area => res.send(area))
            .catch(e => next(e))
    }

    deleteArea(req: Request, res: Response, next: NextFunction) {
        this.areaService.deleteArea(req.params.id)
            .then(area => {
                area ? res.end() : res.status(400).end()
            })
            .catch(e => next(e))
    }
}