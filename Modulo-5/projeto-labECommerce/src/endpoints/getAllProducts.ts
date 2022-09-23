import { Request, Response } from "express";
import connection from "../dataBase/connection";

const getAllProducts = async (req: Request, res: Response) => {

    try {
        let order = req.query.order as string
        let search = req.query.search as string

        let orderBy = ""
        
         if(order && order.toUpperCase() === "ASC"){

            orderBy = `ORDER BY name ${order.toUpperCase()}`
         }

         if(order && order.toUpperCase() === "DESC"){

            orderBy = `ORDER BY name ${order.toUpperCase()}`
         }

         if(!search) search = "%"


        const result = await connection.raw(`
            SELECT * FROM labecommerce_products
            WHERE name LIKE "%${search}%" ${orderBy}
        `)

        if (await result[0].length < 1) {
            res.send("Não existem Usuarios ainda").status(200)
        }

        res.send(result[0]).status(200)
    } catch (error: any) {
        res.send(error.message).status(400)
    }
}

export default getAllProducts