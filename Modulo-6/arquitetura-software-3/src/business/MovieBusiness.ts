import { MovieDatabase } from "../data/MovieDatabase"
import { Movie } from "../model/Movie"
import { idGenerator } from "../service/idGenerator"


export class MovieBusiness {
    async create(input: any) {

        try {
            const { 
                title,
                description,
                duration_in_minutes,
                year_of_release } = input

        if(!title || !description || !duration_in_minutes || !year_of_release) throw new Error("Body incompleto")

        const id = idGenerator()

        const movie: Movie = {
            id,
            title,
            description,
            duration_in_minutes,
            year_of_release }
        
        const movieDB = new MovieDatabase()
        await movieDB.create(movie)


        } catch (error: any) {
            throw new Error(error.message )
        }
    }
}