import { PostDatabase } from "../data/PostDatabase"
import { generateId } from "../services/generateId"

export class PostBusiness {
    async create(input: any) {

        try {
            const { photo, description, type, authorId } = input
            if (!photo || !authorId) throw new Error("Body incompleto")

            const postId = generateId()
            const post = {
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

    async getById(idUser: any) {

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