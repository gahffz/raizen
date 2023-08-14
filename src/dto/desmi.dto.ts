interface DesmiDateTime {
    start: Date
    end: Date
}

interface DesmiLineOne {
    startFlow: number
    endFlow: number
    campaignFlow: number
    campaignHour: number
    campaignCiclom: number
}

interface DesmiReagentConsumption {
    hydrochloricAcid: number
    sodiumHydroxide: number
}

interface DesmiCationic {
    ph: number
    conductivity: number
    toughness: number
}

interface DesmiAnionic {
    ph: number
    conductivity: number
    silica: number
}

interface DesmiMixed {
    ph: number
    conductivity: number
    silica: number
    toughness: number
}

export default class DesmiDto {
    table: any
    datetime: DesmiDateTime | any
    lineOne: DesmiLineOne | any
    reagentConsumption: DesmiReagentConsumption | any
    cationic: DesmiCationic | any
    anionic: DesmiAnionic | any
    mixed: DesmiMixed | any
    comment: string | any
}