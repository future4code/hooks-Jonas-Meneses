import { Request, Response } from "express";
import connection from "../dataBase/connection";
import { v4 as createId } from 'uuid';
import checkIduser from "../functions/checkIdUser";

const seachUserPurchases = async (req: Request, res: Response) =>{

    try {
        const id = req.params.user_id as string

        if(!id ) throw new Error("Paramentro obrigatório")

        const user = checkIduser(id)

        if((await user).length <1) throw new Error(`Usuario não encontrado`)

        const [result] = await connection.raw(`
        SELECT 
            labecommerce_purchases.id,
            name, price,  quantity,
            total_price totalPrice, 
            product_id productId, image_url imageUrl
        FROM labecommerce_purchases
        JOIN labecommerce_products on labecommerce_purchases.user_id = "${id}" 
        and labecommerce_products.id = labecommerce_purchases.product_id;
        `)

        res.send(result)

        
    } catch (error:any) {
        res.send(error.message).status(400)
    }
}

export default seachUserPurchases