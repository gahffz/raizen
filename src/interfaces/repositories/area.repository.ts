import { Area } from "../../entities";

export default interface AreaRepository {
    getAll(): Promise<Area[]>

    getById(id: any): Promise<Area | null>

    create(area: Area): Promise<Area>

    update(id: any, area: Area): Promise<Area | null>

    delete(id: any): Promise<any>
}