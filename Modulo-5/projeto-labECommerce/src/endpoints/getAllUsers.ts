import { Request, Response } from "express";
import connection from "../dataBase/connection";

const getAllUsers = async (req: Request, res: Response) =>{

    try {
        const result = await connection.raw(`
            SELECT * FROM Labecommerce_users
        `)

        if (await result[0].length<1){
            res.send("Não existem Usuarios ainda").status(200)
        } 

        res.send(result[0]).status(200)
    } catch (error:any) {
        res.send("Algo de Errado não deu certo").status(400)
    }

}

export default getAllUsers