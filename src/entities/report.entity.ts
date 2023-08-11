export default interface Report {
    id?: any
    uid?: any
    category: number
    company: number
    unit: number
    datetime: Date
    shift: number
    area: number
    sector: number
    activity: string
    observation: number
    description: string
    action: string
    createdAt?: Date
    updatedAt?: Date
}