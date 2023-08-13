export default interface PureReagent {
    id?: any
    uid?: any
    name: string
    maker: string
    lot: string
    expiration: Date
    measurement: number
    quantity: number
    initialQuantity: number
    consumedQuantity: number
    fispq?: string
    photo?: string
    createdAt?: Date
    updatedAt?: Date
}