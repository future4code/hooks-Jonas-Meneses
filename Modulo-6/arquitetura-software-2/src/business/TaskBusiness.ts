import { TaskDatabase } from "../data/TaskDatabase"


export class TaskBusiness {

    insertTask = async (input: any) => {
        try {
            const { title, description, deadline, authorId } = input

            if (
                !title ||
                !description ||
                !deadline ||
                !authorId
            ) {
                throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
            }

            const id: string = Date.now().toString()

            const TaskDB = new TaskDatabase()

            await TaskDB.insertTask({
                id,
                title,
                description,
                deadline,
                authorId,
            })

        } catch (error: any) {
            throw new Error( error.sqlMessage)
        }
    }
}

