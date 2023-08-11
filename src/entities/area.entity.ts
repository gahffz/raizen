import AreaFile from "./area-file.entity";

export default interface Area {
    id?: any, 
    uid?: any, 
    type: any, 
    details: string, 
    photos: AreaFile[], 
    files: AreaFile[], 
    createdAt?: Date, 
    updatedAt?: Date
}