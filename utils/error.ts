type Response = {
    message: string, 
    status: number
}

export class HttpError extends Error {
    message: string
    status: number

    constructor(response: Response) {
        super()
        this.message = response.message
        this.status = response.status
    }
}