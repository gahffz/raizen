interface DesmiDateTime {
    start?: Date
    end?: Date
}

interface DesmiLineOne {
    startFlow?: number
    endFlow?: number
    campaignFlow?: number
    campaignHour?: Date
    campaignCiclom?: Date
}

interface DesmiReagentConsumption {
    hydrochloricAcid?: number
    sodiumHydroxide?: number
}

interface DesmiCationic {
    ph?: number
    conductivity?: number
    toughness?: number
}

interface DesmiAnionic {
    ph?: number
    conductivity?: number
    silica?: number
}

interface DesmiMixed {
    ph?: number
    conductivity?: number
    silica?: number
    toughness?: number
}

export default interface Desmi {
    id?: any
    uid?: any
    table: any
    datetime?: DesmiDateTime
    lineOne?: DesmiLineOne
    reagentConsumption?: DesmiReagentConsumption
    cationic?: DesmiCationic
    anionic?: DesmiAnionic
    mixed?: DesmiMixed
    comment?: string
    createdAt?: Date
    updatedAt?: Date
}