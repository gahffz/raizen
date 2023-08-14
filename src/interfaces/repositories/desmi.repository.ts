import { Desmi } from "../../entities";

export default interface DesmiRepository {
    getAll(): Promise<Desmi[]>

    getById(id: any): Promise<Desmi | null>

    create(desmi: Desmi): Promise<Desmi>

    update(id: any, desmi: Desmi): Promise<Desmi | null>

    delete(id: any): Promise<any>
}