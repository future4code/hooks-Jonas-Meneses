import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase{

    private static TABLE_NAME = "LABEFLIX_MOVIE"

    async create ({id, title, description, duration_in_minutes, year_of_release}:any){
        if(!id || !title || !description || !duration_in_minutes || !year_of_release) throw new Error("Body incompleto")
        
        const input = {
            id,
            title,
            description,
            duration_in_minutes, year_of_release
        }
    }

    
}