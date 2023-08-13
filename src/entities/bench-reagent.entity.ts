export default interface BenchReagent {
    id?: any
    uid?: any
    name: string
    lot: string
    expiration: Date
    measurement: number
    quantity: number
    initialQuantity: number
    consumedQuantity: number
    components?: Component[]
    photo?: string
    createdAt?: Date
    updatedAt?: Date
}

interface Component {
    pureReagentId: any
    quantity: number
}