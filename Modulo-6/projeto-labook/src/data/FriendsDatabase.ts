import { Friends } from "../model/Friends";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class FriendsDatabase extends BaseDatabase {

    async create(friends: Friends) {
        try {
            await BaseDatabase.connection('labook_friends')
                .insert(friends)
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    async delete(friends: any) {
        try {
            await BaseDatabase.connection('labook_friends')
                .where({
                    id_friend1: friends.id_friend1,
                    id_friend2: friends.id_friend2,
                }).orWhere({
                    id_friend1: friends.id_friend2,
                    id_friend2: friends.id_friend1,
                }).del()
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    async getFriends(id: any) {

        try {

            const [result] = await BaseDatabase.connection       
            .raw(`
            SELECT id_friend1 idFriend1, id_friend2 idFriend2 FROM labook_friends
            WHERE id_friend1 = "${id}" OR id_friend2 = "${id}"
            `)
            return result

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }

    }
}