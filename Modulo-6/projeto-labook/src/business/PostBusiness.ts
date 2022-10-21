import { PostDatabase } from "../data/PostDatabase"
import { postDB } from "../model/PostDB"
import { PostDTO } from "../model/PostDTO"
import { generateId } from "../services/generateId"

export class PostBusiness {
    async create(input: PostDTO) {

        try {
            const { photo, description, type, authorId } = input
            if (!photo || !authorId) throw new Error("Body incompleto")

            const postId = generateId()
            const post: postDB = {
                id: postId,
                photo,
                description,
                type,
                author_id: authorId
            }

            const postDB = new PostDatabase()
            await postDB.create(post)
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)

        }
    }

    async getById(idUser: string) {

        try {

            if (!idUser) throw new Error("")

            const postDB = new PostDatabase()
            const [result] = await postDB.getById(idUser)

            return result

        } catch (error: any) {

            throw new Error(error.message || error.sqlMessage)

        }
    }
}