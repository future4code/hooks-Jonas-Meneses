import { Request, Response } from "express";
import connection from "../dataBase/connection";
import { v4 as createId } from 'uuid';
import checkIduser from "../functions/checkIdUser";

const purchases = async (req: Request, res: Response): Promise<void> => {
    try {
        const { user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) throw new Error("Body imcompleto")

        const user = checkIduser(user_id)

        if ((await user).length < 1) throw new Error("Usuario não encontrado")

        if (isNaN(Number(quantity))) throw new Error("quantity tem que ser do tipo number")


        const [product] = await connection.raw(`
            SELECT * FROM labecommerce_products
            WHERE id="${product_id}"
        `)


        if (await product.length < 1) throw new Error("Produto não encontrado")

        const { price } = await product[0]
        const id = createId()
        const total_price = price * quantity

        await connection.raw(`
            INSERT INTO labecommerce_purchases(id, quantity, total_price, user_id, product_id)
            VALUES ("${id}", "${quantity}", "${total_price}", "${user_id}", "${product_id}")
        `)

        res.send("Venda Adicionada")

    } catch (error: any) {
        res.send(error.message).status(400)
    }
}

export default purchases