import { Request, Response } from "express"
import connection from "../data/connection"

const getNameAndType = async (req:Request, res: Response) :Promise<void> =>{

    try {
        let name = req.query.name as string
        let tipo = req.params.tipo as string
        let order = req.query.order

        if(!name) name = "%"
        if(!tipo ||tipo === ":tipo" ) tipo = "%"
        if()
        
         const result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE name LIKE "%${name}%" AND type LIKE "%${tipo}%"
        `)
        
        res.send(result[0])
    } catch (error: any) {
        console.log(error)
       res.send(error.message || error.sqlMessage)
    }

}

export default getNameAndType