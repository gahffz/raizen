import { InferSchemaType, Schema, model } from "mongoose";

const schema = new Schema({
    uid: {
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }, 
    table: {
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'Table'
    }, 
    datetime: {
        start: {
            type: Date
        }, 
        time: {
            type: Date
        }
    }, 
    lineOne: {
        startFlow: {
            type: Number
        }, 
        endFlow: {
            type: Number
        }, 
        campaignFlow: {
            type: Number
        }, 
        campaignHour: {
            type: Date
        }, 
        campaignCiclom: {
            type: Date
        }
    }, 
    reagentConsumption: {
        hydrochloricAcid: {
            type: Number
        }, 
        sodiumHydroxide: {
            type: Number
        }
    }, 
    cationic: {
        ph: {
            type: Number
        }, 
        conductivity: {
            type: Number
        }, 
        toughness: {
            type: Number
        }
    }, 
    anionic: {
        ph: {
            type: Number
        }, 
        conductivity: {
            type: Number
        }, 
        silica: {
            type: Number
        }
    }, 
    mixed: {
        ph: {
            type: Number
        }, 
        conductivity: {
            type: Number
        }, 
        silica: {
            type: Number
        }, 
        toughness: {
            type: Number
        }
    }, 
    comment: {
        type: String
    }
})

export type Desmi = InferSchemaType<typeof schema>

export const DesmiModel = model<Desmi>('Desmi', schema)