import { postDB } from "../model/PostDB";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    private static TABLE_NAME = " "

    async create(post: postDB) {

        try {

            await PostDatabase.connection("labook_posts")
                .insert(post)

        } catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }

    async getById(id: string) {

        try {

           const result =  await PostDatabase.connection.raw(`
                SELECT 
                    id, photo, description, type, 
                    DATE_FORMAT(created_at, "%d/%m/%Y") createdAt,
                    author_id authorId
                FROM labook_posts
                WHERE id = "${id}";
           `)
           
           

            return result

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)

        }
    }
}