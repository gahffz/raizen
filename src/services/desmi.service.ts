import { Desmi } from "../entities";
import { DesmiRepository } from "../interfaces/repositories";

export default class DesmiService {
    constructor(private repository: DesmiRepository) {}

    getAll(): Promise<Desmi[]> {
        return this.repository.getAll()
    }

    getById(id: any): Promise<Desmi | null> {
        return this.repository.getById(id)
    }

    create(desmi: Desmi): Promise<Desmi> {
        return this.repository.create(desmi)
    }

    update(id: any, desmi: Desmi): Promise<Desmi | null> {
        return this.repository.update(id, desmi)
    }

    delete(id: any): Promise<any> {
        return this.repository.delete(id)
    }
}