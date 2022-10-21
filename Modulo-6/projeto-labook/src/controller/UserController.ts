import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { userDTO } from "../model/UserDTO"


export class UserController {

    public async create(req: Request, res: Response) {
        try {
            let message = "Success!"
            const { name, email, password } = req.body

            const input: userDTO = { name, email, password }

            const userBusiness = new UserBusiness()
            await userBusiness.create(input)

            res.status(201).send("sucesso")

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send(error.message || error.sqlMessage)
        }
    }

    public async getFriends (req: Request, res: Response){
        try {
            
            const idUser = req.params.id
    
            const userBusiness = new UserBusiness()
            const result = await userBusiness.getFriends(idUser)
    
            res.send({friends: result})

        } catch (error:any) {
            res.send(error.message || error.sqlMessage)
        }
        

    }
}