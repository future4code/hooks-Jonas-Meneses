import Express  from "express";
import cors from "cors"
import {produtos} from "./data"
import { v4 as createId } from 'uuid';

const app = Express()

app.use(Express.json())
app.use(cors())

// =========== test ==========
app.get( "/test", (req, res) =>{
    res.send("A API está funcional")
})


// ======= pega todos os produtos =============
app.get("/getAllProducts", (req, res) =>{
    res.send(produtos)
})

// =============== cria produtos ============

app.post("/products/create", (req, res) =>{
    const {body} = req

    try {

        if(!body.name && !body.price) throw new Error("Body Obrigatorio")
        
        const obj = {
            id: createId(),
            name: body.name,
            price: body.price
        }

        produtos.push(obj)


        res.send(produtos)
        
    } catch (error: any) {
        
        res.send(error)
    }
})

// ========== editar Preço ===============

app.put("/products/edit/:idProduct", (req,res) =>{
    const idProduct = req.query.idProduct
    const newPrice = req.body.price

    try {

        if(!idProduct) throw new Error("parametro id obrigatorio")

        const objProduto = produtos.find(prod =>{
            return prod.id === idProduct  
        })

        if (!objProduto) throw new Error("produto não encontrado")

        const indexProd = produtos.findIndex(prod =>{
            return prod.id === idProduct
        }) 

        produtos[indexProd] = {... produtos[indexProd], price: newPrice }

        res.send(produtos)
            
    } catch (error: any) {
        res.send(error)
        
    }
})

//============= delete produto =================

app.delete("/products/delete/:idProduct", (req,res) =>{
    
    const {idProduct} = req.query

    try {
        
        if (!idProduct) throw new Error("parametro id obrigatorio")

        const indexProd = produtos.findIndex(prod =>{
            return prod.id === idProduct
        })
        console.log(indexProd)


        if (indexProd < 0) throw new Error("Produto não encontrado")

        
        produtos.splice(indexProd, 1)

        res.send(produtos)


    }catch (error: any) {
        res.send(error)
        
    }


})


// ========== listen ===========
app.listen(3003, () =>{
    console.log("Rodando na porta 3003")
})