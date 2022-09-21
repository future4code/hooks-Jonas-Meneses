
import { Request, Response } from "express";
import connection from "../dataBase/connection";
import { v4 as createId } from 'uuid';

const UserCreate = async (req: Request, res: Response) =>{

        let errorCode = 400

        try {

            const {name, email, password} = req.body

            if(!name || !email || !password ) {
                throw new Error ("Os dados do Body estão imconpleto")
                // errorCode =0 
            }

            const idUser = createId()

            await connection.raw(`
                INSERT INTO Labecommerce_users(id, name, email, password)
                VALUES ("${idUser}", "${name}", "${email}", "${password}");
            `)

            res.send("Usuario criado!").status(200)

        } catch (error: any) {
            res.send(error.message).status(errorCode)
        }
    
} 

export default UserCreate