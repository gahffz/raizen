type AppConfig = {
    port: number, 
    database: 'mongo' | 'sql'
}

const config: AppConfig = {
    port: 5810, 
    database: 'mongo'
}

export default config