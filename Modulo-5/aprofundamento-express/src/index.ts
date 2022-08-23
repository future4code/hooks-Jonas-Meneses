import express from "express"
import cors from "cors"

import { Afazerer } from "./ex2"

const app = express()

app.use(express.json())
app.use(cors())

let afazeres: Afazerer[] = [

    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 2,
        "id": 3,
        "title": "et itaque necessitatibus maxime molestiae qui quas velit",
        "completed": false
    },
    {
        "userId": 2,
        "id": 4,
        "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
        "completed": false
    },
    
    {
        "userId": 3,
        "id": 5,
        "title": "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
        "completed": false
    },
    {
        "userId": 3,
        "id": 6,
        "title": "rerum perferendis error quia ut eveniet",
        "completed": false
    },
       
]

app.get("/ping", (req, res) => {
    res.send("pong").status(200)
})

//=========================================

app.get("/afazeres", (req, res) => {
    res.send(afazeres)
})

//=========================================

app.get("/afazeres/:status/", (req, res) => {

    const status: string = (req.query.status as string)
    console.log(status)

    try {

        if (!status) throw new Error("Parametro obrigatorio")

        if (status === "true" || status === "false") {
            const statusReturn = afazeres.filter(stat => {
                return stat.completed.toString() === status
            })
            res.send(statusReturn).status(200)
        } else {
            throw new Error("status invalido")
        }

    } catch (error: any) {
        res.send(error.message)
    }

})

//=========================================
app.post("/createAfazer", (req, res) => {
    const { title, userId } = req.body

    try {

        if (!userId) throw new Error("Id do User obrigatório")
        if (!title) throw new Error("Nome da Tarefa é obrigatório")

        const newTarefa = {
            userId,
            "id": (afazeres.length + 1),
            title,
            "completed": false
        }

        afazeres.push(newTarefa)
        res.send(afazeres).status(201)

    } catch (error: any) {
        res.send(error.message).status(400)
    }

})

//=========================================

app.put("/edit/tarefa/:idTarefa", (req, res) => {
    const { idTarefa } = req.query

    try {

        if (!idTarefa) throw new Error("Id da tarefa obrigatorio")

        const tarefa = afazeres.find(taref => {
            return taref.id === Number(idTarefa)
        })

        if (!tarefa) throw new Error("Tarefa não encontrada")

         afazeres = afazeres.map(taref => {
            if (taref.id === Number(idTarefa)) {
                return {
                    ...taref,
                    "completed": !taref.completed
                }
            }else{
                return taref
            }
        })

        res.send(afazeres)

    } catch (error: any) {
        res.send(error.message).status(400)
    }
})

//=========================================

app.delete("/delete/:idTarefa", (req, res)=>{

    const { idTarefa } = req.query
    console.log(idTarefa)

    try {

        if (!idTarefa) throw new Error("Id da tarefa obrigatorio")

        const tarefa = afazeres.find(taref => {
            return taref.id === Number(idTarefa)
        })

        if (!tarefa) throw new Error("Tarefa não encontrada")

         afazeres = afazeres.filter(taref => {
            return taref.id != Number(idTarefa)
        })

        res.send(afazeres)

    } catch (error: any) {
        res.send(error.message).status(400)
    }

})

//=========================================

app.get("/afazeres/user/:idUser", (req, res) => {

    const {idUser} = req.query
    console.log(idUser)


    try {

        if (!idUser) throw new Error("Parametro obrigatorio")

        const user = afazeres.find(taref => {
            return taref.userId === Number(idUser)
        })

        if(!user) throw new Error("Usuario não exist")

        const newArray = afazeres.filter(tarefa =>{
            return tarefa.userId === Number(idUser)
        })

        res.send(newArray)

    } catch (error: any) {
        res.send(error.message)
    }

})

//=========================================

app.listen(3003, () => console.log("rodando na porta 3003"))
