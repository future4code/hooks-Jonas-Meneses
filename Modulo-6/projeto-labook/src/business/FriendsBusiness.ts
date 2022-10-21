import { FriendsDatabase } from "../data/FriendsDatabase";
import { Friends } from "../model/Friends";
import { FriendsDTO } from "../model/FriendsDTO";
import { generateId } from "../services/generateId";

export class FriendsBusiness {

    async create(input: FriendsDTO) {
        try {
            const { idFriend1, idFriend2 } = input
            if (!idFriend1 || !idFriend2) throw new Error("Body incompleto")

            const friends : Friends = {
                id: generateId(),
                id_friend1: idFriend1,
                id_friend2: idFriend2
            }

            const friendDB = new FriendsDatabase()
            await friendDB.create(friends)

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }

    }

    async delete(input: FriendsDTO) {
        try {
            const { idFriend1, idFriend2 } = input
            if (!idFriend1 || !idFriend2) throw new Error("Body incompleto")

            const friends : any = {
                id_friend1: idFriend1,
                id_friend2: idFriend2
            }

            const friendDB = new FriendsDatabase()
            await friendDB.delete(friends)

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }

    }

    async getFriends (id:any){
        
        try {
            
            if(!id) throw new Error("id invalido")
    
            const friendDB = new FriendsDatabase()
            const friends = await friendDB.getFriends(id)
            const result:any = []

            for (const i of friends) {
                if(i.idFriend1 !== id) result.push(i.idFriend1)
                if(i.idFriend2 !== id) result.push(i.idFriend2)
            }

            return result

        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}