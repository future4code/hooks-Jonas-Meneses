import { UserDatabase } from "../data/UserDatabase"
import { generateId } from "../services/generateId"

export class UserBusiness {
    
    async create(input: any) {
        try {
            
            const { name, email, password } = input
            if (!name || !email || !password) throw new Error("")
    
            const id: string = generateId()
            const user = { id, name, email, password }
    
            const userDB = new UserDatabase()
            await userDB.create(user)

        } catch (error) {
            throw new Error("")
        }
        


    }
}