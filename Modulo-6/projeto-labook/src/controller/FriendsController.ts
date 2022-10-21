import { Request, Response } from "express"
import { FriendsBusiness } from "../business/FriendsBusiness"
import { FriendsDTO } from "../model/FriendsDTO"


export class FriendsController {
    async create(req: Request, res: Response) {
        try {
            const { idFriend1, idFriend2 } = req.body 
            const input : FriendsDTO = {
                idFriend1,
                idFriend2
            }

            const friendsBusiness = new FriendsBusiness()
            await friendsBusiness.create(input)

            res.send("sucesso")
        } catch (error: any) {
            res.send(error.message || error.sqlMessage)
        }

    }

    async delete(req: Request, res: Response) {
        try {
            const { idFriend1, idFriend2 } = req.body 
            const input : FriendsDTO = {
                idFriend1,
                idFriend2
            }

            const friendsBusiness = new FriendsBusiness()
            await friendsBusiness.delete(input)

            res.send("sucesso")
        } catch (error: any) {
            res.send(error.message || error.sqlMessage)
        }
    }

    public async getFriends (req: Request, res: Response){
        try {
            
            const idUser = req.params.id
    
            const friendBusiness = new FriendsBusiness()
            const result = await friendBusiness.getFriends(idUser)
    
            res.send({friends: result})

        } catch (error:any) {
            res.send(error.message || error.sqlMessage)
        }
        

    }
}