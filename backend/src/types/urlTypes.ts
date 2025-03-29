export interface URLType {
    id: string;
    url: string;
    sufix: string;
    clicks: number;
    active: boolean;
    createdAt: string;
}

export interface UrlModelResult {
    error: {
        code: number;
        message: string;
    } | null;
    data: URLType | null;
    code: number; 
} 