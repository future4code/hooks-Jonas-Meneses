import express, { Request, Response } from "express"
import cors from "cors"
import connection from "../database/connection"
import { v4 as createId } from 'uuid';
import { UserId } from "../types";
import usersCheck from "../functions/usersCheck";


const app = express()
app.use(cors())
app.use(express.json())


// ============================== User Create ==============================
app.post("/user", async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) throw new Error("Todos os atributos do body são obrigatorios")

        const id = createId()

        await connection.raw(`
        INSERT INTO Users (id, name, nickname, email)
        VALUES("${id}", "${name}", "${nickname}", "${email}");
        `)

        res.status(200).send("Produto adicionado")


    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//================================ GET USERS ===============================
app.get("/user/all", async (req: Request, res: Response) => {
    let errorCode = 400

    try {

        const result = await connection.raw(`
                SELECT * FROM Users
            `)

        res.send(result[0]).status(200)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//================================ GET USERS ===============================
app.get("/user/:id", async (req: Request, res: Response) => {
    let errorCode = 400

    try {

        const idUser = req.params.id

        if (!idUser || idUser === ":id") throw new Error("Parametro id obrigatorio")

        const result = await connection.raw(`
            SELECT id, nickname from Users
            WHERE id = "${idUser}"
        `)

        const user: UserId[] | undefined[] = result[0]

        if (user.length < 1) throw new Error("usuario não encontrado")


        res.send(user).status(200)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


//================================ GET USERS ===============================
let errorCode = 400

app.post("/task", async (req: Request, res: Response) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body

        if (!title || !description || !limitDate || !creatorUserId) throw new Error(" Todas as propriedades do Body são obrigatorias")

        const user = usersCheck(creatorUserId)

        if((await user).length < 1)  throw new Error("usuario não encontrado")

        await connection.raw(`
        INSERT INTO Tasks(title, description, limitDate, creatorUserId )
        VALUES ("${title}", "${description}", "${limitDate}", "${creatorUserId}");
        `)

        res.send("Tarefa criada com sucesso")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})


// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})