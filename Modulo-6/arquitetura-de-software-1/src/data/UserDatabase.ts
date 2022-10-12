import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    TABLE_NAME: string = "User_Arq"

    protected async create(item: any){
        await super.create(item)
    }
}