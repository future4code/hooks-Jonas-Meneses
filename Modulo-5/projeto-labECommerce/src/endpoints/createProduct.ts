import { Request, Response } from "express";
import connection from "../dataBase/connection";
import { v4 as createId } from 'uuid';


const createProduct = async (req: Request, res: Response) =>{

    try {
        const {name, price, imageUrl} = req.body

        if(!name || !price || !imageUrl) throw new Error("Os dados do Body estão imconpleto")

        const id = createId()
        

        await connection.raw(`
            INSERT INTO labecommerce_products (id, name, price, image_url)
            VALUES("${id}", "${name}", "${price}", "${imageUrl}")
        `)
        res.send("produto criado").status(201)
    } catch (error: any) {
        res.send(error.message).status(400)
    }
}

export default createProduct