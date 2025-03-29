import { Request, Response} from "express"
import { UrlModelResult } from "../types/urlTypes"

export class UrlController {

    static createResponse(res: Response, result: UrlModelResult){
        if(result.error) {
            console.log(result.error)
            return res.status(result.error.code).json(JSON.stringify(result.error))
        }
        
        return res.status(result.code).json(result.data)
    }

    static async getUrlBySufix(req: Request, res: Response){
        return res.send("")
    }

    static async getClicksBySufix(req: Request, res: Response){
        return res.send("")
    }

    static async createUrl(req: Request, res: Response){
        res.send("")
    }
}