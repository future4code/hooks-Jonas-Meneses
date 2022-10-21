import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

   public insertUser = async (
      user: user
   ) => {
      try {
         await UserDatabase.connection('Architecture_User').insert({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email,
            password: user.password
         })
      } catch (error: any) {
         throw new Error(error.message)
      }

   }

}
