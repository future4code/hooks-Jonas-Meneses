import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieDTO } from "../model/MovieDTO";

export class MovieController {

    async createMovie(req: Request, res: Response) {
        try {
            const {title, description, duration_in_minutes, year_of_release } = req.body
            const input: MovieDTO = { 
                title,
                description,
                duration_in_minutes,
                year_of_release
            }

            const movieBusiness = new MovieBusiness()
            await movieBusiness.create(input)
            
            res.send("Filme add").status(201)
        } catch (error: any) {
            res.send(error.message).status(400)
        }
    }
}