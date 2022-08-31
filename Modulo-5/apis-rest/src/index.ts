import express from "express";
import cors from "cors"
import { User, users } from "./dataUser";

const app = express()

app.use(express.json())
app.use(cors())

//exercicio 1
app.get("/users", (req, res) => res.send(users))

//a - Metodo GET
//b - não entendi direito a pergunta

//exercicio 2
app.get("/users/type", (req, res) => {
    const {typeuser } = req.query

    try {
        if(typeuser === ":typeuser" || !typeuser) throw new Error("passe o parametro")
        console.log(typeuser)

        const arrayType: User[] | undefined = users.filter((user: User) =>{
            return user.type === typeuser
        })

        if(arrayType.length === 0) throw new Error("tipo não encontrado")

        res.send(arrayType)

    } catch (error: any) {
        res.send(error.message)
    }

})

//EXERCICIO 3

app.get("/users/name/:nameUser", (req, res) =>{
    const {nameUser} = req.params
    
    try {

        const user = users.find(us => us.name === nameUser )

        if(!user) throw new Error ("user não encontrado")

        res.send(user)
        

    } catch (error:any) {
        res.send(error.message)
    }
})

//a- Uso o get


//exercicio 4

app.post("/user/create", (req,res)=>{
    const {name, email, type, age} = req.body

    try {

        if(!name || !email || !type || !age) throw new Error("Problemas no Body")

        const newUser: User = {
            id: users.length + 1,
            name,
            email,
            type,
            age
        }

        users.push(newUser)

        res.send(users)
        
    } catch (error: any) {
        res.send(error.message)
    }
})

//a- Ele continua adicionando, mas não é o metodo correto.




app.listen(3003, () => console.log("rodando na porta 3003"))