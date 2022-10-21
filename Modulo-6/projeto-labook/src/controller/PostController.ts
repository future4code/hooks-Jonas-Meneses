import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {

    async create(req: Request, res: Response) {
        try {
            const { photo, description, type, authorId } = req.body

            const input = { photo, description, type, authorId }

            const postBusiness = new PostBusiness()
            await postBusiness.create(input)

            res.send("Sucesso")
        } catch (error: any) {
            res.send(error.message || error.sqlMessage)
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const postBusiness = new PostBusiness()
            const result = await postBusiness.getById(id)

            res.send(result)
        } catch (error: any) {
            res.send(error.message || error.sqlMessage)
        }
    }
}