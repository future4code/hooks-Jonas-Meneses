import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    async create(user:any){
        try {
            await BaseDatabase.connection('labook_users')
         .insert( user )
        } catch (error) {
            
        }
    }
}