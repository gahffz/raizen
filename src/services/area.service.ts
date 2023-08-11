import { Area, AreaType } from "../entities";
import { AreaRepository, AreaTypeRepository } from "../interfaces/repositories";

export default class AreaService {
    constructor(
        private areaRepository: AreaRepository, 
        private areaTypeRepository: AreaTypeRepository
    ) {}

    getAllAreaTypes(): Promise<AreaType[]> {
        return this.areaTypeRepository.getAll()
    }

    getAreaType(id: any): Promise<AreaType | null> {
        return this.areaTypeRepository.getById(id)
    }

    createAreaType(areaType: AreaType): Promise<AreaType> {
        return this.areaTypeRepository.create(areaType)
    }

    updateAreaType(id: any, areaType: AreaType): Promise<AreaType | null> {
        return this.areaTypeRepository.update(id, areaType)
    }

    deleteAreaType(id: any): Promise<any> {
        return this.areaTypeRepository.delete(id)
    }

    getAreas(): Promise<Area[]> {
        return this.areaRepository.getAll()
    }

    getArea(id: any): Promise<Area | null> {
        return this.areaRepository.getById(id)
    }

    createArea(area: Area): Promise<Area> {
        return this.areaRepository.create(area)
    }

    updateArea(id: any, area: Area): Promise<Area | null> {
        return this.areaRepository.update(id, area)
    }

    deleteArea(id: any): Promise<any> {
        return this.areaRepository.delete(id)
    }
}