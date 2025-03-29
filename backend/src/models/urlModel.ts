import { URLType, UrlModelResult } from "../types/urlTypes";

export class UrlModel {

    // ======================================== AUX FUNCTIONS =============================== //

    // Generate a result object in order to type the model response
    static async createResult(data: URLType | null, code: number = 200){
        const result: UrlModelResult = {
            error: null,
            data: data,
            code: code
        }
        return result
    }

    // Generate a result object with error data
    static async createError(code:number, message: string){
        const result: UrlModelResult = {
            error: {
                code: code,
                message: message
            },
            data: null,
            code: code
        }
        return result
    }

    // ========================================= ORM ===========================================
    static async getUrlBySufix(sufix: string){
        
    }

    static async getClicksBySufix(sufix: string){

    }

    static async createUrl(url: URLType){

    }
}