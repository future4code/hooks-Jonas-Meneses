import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"


export class UserController {

    public async create(req: Request, res: Response) {
        try {
            let message = "Success!"
            const { name, email, password } = req.body

            const input = { name, email, password }

            const userBusiness = new UserBusiness()
            await userBusiness.create(input)

            res.status(201).send({ message })

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
}