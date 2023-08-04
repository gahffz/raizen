export class HttpClientError extends Error {
    status: number

    constructor(status: number, message: any) {        
        super(JSON.stringify({
            status: status, 
            message: message
        }))
        this.status = status
    }
}