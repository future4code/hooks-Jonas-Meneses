import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    async create(user: User) {
        try {
            await BaseDatabase.connection('labook_users')
                .insert(user)
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    async getAllUsers(){
        try {
           const result = await BaseDatabase.connection('labook_users')
            .select()
            return result
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)

            
        }
    }

    async getFriends(id: any) {

        try {

            const [result] = await BaseDatabase.connection.raw(`
            SELECT id_friend1 idFried1, id_friend2 idFried2 FROM labook_friends
            WHERE id_friend1 = "${id}" OR id_friend2 = "${id}"
            `)
            return result

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }

    }
}