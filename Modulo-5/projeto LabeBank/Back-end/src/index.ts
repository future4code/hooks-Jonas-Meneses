import cors from "cors"
import { Request, Response, Express } from "express" 
import  express  from "express"
import { Cadastro, Transferencia, Deposito, dataClient } from "./dataUsers"
import { validaIdade, verificaCpf } from "./funcoes/funtions"

const app = express()
app.use(express.json())
app.use(cors())


// ======================= PEGA TODOS USURARIOS

app.get("/alluser", (req: Request, res: Response) => {
    res.send(dataClient)
})

//========================= CRIAR CONTA =======================

app.post("/create/user", (req: Request, res: Response) => {

    const { name, cpf, birthDate } = req.body
    const idade: boolean = validaIdade(birthDate) 

    try {

        if (!name || !cpf || !birthDate ) throw new Error("Body incompleto")

        if(idade) throw new Error("Usuario menor de 18 anos")

        const verifCpf: Cadastro | undefined = verificaCpf(cpf)

        if (verifCpf) throw new Error("Cliente já tem cadastro")

        const objetoCliente = {
            name,
            cpf,
            birthDate,
            debitos: [],
            transferencias: [],
            depositos: [],
            saldo: 0
        }

        dataClient.push(objetoCliente)

        res.send(dataClient)
    } catch (error: any) {
        res.send(error.message)
    }

})


// ======================== SALDO ===========================

app.get("/saldoUser/:cpf", (req: Request, res: Response) => {
    const { cpf } = req.params

    try {

        const getCpf: Cadastro | undefined = verificaCpf(Number(cpf))

        if (!getCpf) throw new Error("Cliente não encontrado")

        res.send({
            saldo: getCpf.saldo.toString()
        })

    } catch (error: any) {

        res.send(error.message)

    }

})


// ========================= tranferencia ==========================


app.put("/tranferencia/:cpfUserReceive/:nameUserReceive", (req: Request, res: Response) => {

    const { name, cpf, valor } = req.body
    const { cpfUserReceive, nameUserReceive } = req.params

    try {

        let index: number = 0

        const getCpf = dataClient.find((client: Cadastro, i: number) => {
            
            if(client.cpf  === cpfUserReceive ) index = i;

            return client.cpf === (cpfUserReceive);
        })

        if (!getCpf) throw new Error("Cliente não encontrado");

        if (getCpf.name !== nameUserReceive) throw new Error("Nome do CLiente não confere com o do cpf")

        const objTranfer: Transferencia = {
            name,
            cpf,
            valor,
            date: new Date().toLocaleString()
        }

        dataClient[index].transferencias.push(objTranfer)
        dataClient[index].saldo += valor

        res.send(dataClient)

    } catch (error: any) {

        res.send(error.message)

    }

})


// ================== add saldo ==================

app.put("/adicionarsaldo/user/:nameuser/:cpfuser", (req: Request, res: Response) =>{
    const {nameuser, cpfuser} = req.params
    const {valor} = req.body

    try {
        
        if(!nameuser || !cpfuser) throw new Error("nome e cpf obrigatorio")
        if(!valor) throw new Error(" valor do deposito obrigatorio ",)

        let index: number  = 0

        const objetoCliente: Cadastro | undefined = dataClient.find((client: Cadastro, i : number) =>{
            if(client.cpf === cpfuser) index = i
            return client.cpf = cpfuser
        })

        if(!objetoCliente) throw new Error("Usuario não encontrado")

        const objDeposito: Deposito = {
            valor,
            data: new Date().toLocaleString()
        }

        dataClient[index].depositos.push(objDeposito)
        dataClient[index].saldo += Number(valor)


        res.send(dataClient)



    } catch (error: any) {
        res.send(error.message)
    }

})



//=========================== LISTEN =======================
app.listen(3003, () => {
    console.log("rodando na porta 3003")
})
