import { UserDatabase } from "../data/UserDatabase"
import { User } from "../model/User"
import { userDTO } from "../model/UserDTO"
import { generateId } from "../services/generateId"

export class UserBusiness {

    async create(input: userDTO) {
        try {

            const { name, email, password } = input
            if (!name || !email || !password) throw new Error("")

            const id: string = generateId()
            const user: User = { id, name, email, password }

            const userDB = new UserDatabase()
            await userDB.create(user)

        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    async getFriends (id:any){
        
        try {
            
            if(!id) throw new Error("id invalido")
    
            const userDB = new UserDatabase()
            const friands = await userDB.getFriends(id)
            const result:any = []

            for (const i of friands) {
                if(i.idFried1 !== id) result.push(i.idFried1)
                if(i.idFried2 !== id) result.push(i.idFried2)
            }

            return result

        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}