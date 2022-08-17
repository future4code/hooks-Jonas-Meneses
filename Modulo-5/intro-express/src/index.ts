import express from "express";
import cors from "cors"
import {users} from "./dataUsers"
import {posts} from "./posts"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) =>{
    res.send("Hello from Express")
})

// exercicio 4
app.get("/users", (req, res)=>{
    
    res.send(users.flat(1))
} )

//exercicio 7
app.get("/posts", (req, res) =>{
    res.send(posts.flat(1))
})

//exercicio 8
app.get("/posts/:userid", (req, res) =>{
    const userid = req.params.userid

    const postUser = posts.filter(post=>{
        return Number(post.userId) === Number(userid)
    }).flat(1)

    res.send(postUser)
})

app.listen(3003, () => console.log("porta 3003"))