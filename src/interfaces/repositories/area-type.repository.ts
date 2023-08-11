import { AreaType } from "../../entities";

export default interface AreaTypeRepository {
    getAll(): Promise<AreaType[]>

    getById(id: any): Promise<AreaType | null>

    create(areaType: AreaType): Promise<AreaType>

    update(id: any, areaType: AreaType): Promise<AreaType | null>

    delete(id: any): Promise<AreaType | null>
}