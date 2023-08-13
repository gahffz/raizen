export default class BenchReagentDto {
    name: string | any
    lot: string | any
    expiration: Date | any
    measurement: number | any
    quantity: number | any
    initialQuantity: number | any
    consumedQuantity: number | any
    components?: Component[] | any
    photo?: string | any
}

interface Component {
    pureReagentId: any
    quantity: number
}