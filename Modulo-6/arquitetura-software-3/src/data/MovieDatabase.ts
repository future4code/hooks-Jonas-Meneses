import { Movie } from "../model/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase{

    private static TABLE_NAME = "LABEFLIX_MOVIE"

    async create (movie: Movie){
        
        try {

           await MovieDatabase.connection(MovieDatabase.TABLE_NAME).insert(movie)

        } catch (error:any) {
            throw new Error(error.message)
        }
        
    }

    
}