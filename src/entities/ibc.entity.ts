export default interface Ibc {
    id?: any
    uid?: any
    table: any
    input?: string
    provider?: string
    quantity?: number
    requestedQuantity?: number
    returnedQuantity?: number
    receiptDate?: Date
    returnDate?: Date
    transaction?: string
    receiver?: string
    returner?: string
    receiverReturner?: string
    createdAt?: Date
    updatedAt?: Date
}