import cors from "cors"
import { Request, Response, Express } from "express"
import express from "express"
import { User, Transferencia, Deposito, dataClient, TIPO, OPERACAO, Pay } from "./dataUsers"
import { validaIdade, verificaCpf } from "./funcoes/funtions"

const app = express()
app.use(express.json())
app.use(cors())

type Transferir = {
    name: string,
    cpf: string,
    valor: number,
    date: string
}

let statusCode = 400


// ======================= PEGA TODOS USURARIOS

app.get("/alluser", (req: Request, res: Response) => {
    res.send(dataClient).status(200)
})

//========================= CRIAR CONTA =======================

app.post("/create/user", (req: Request, res: Response) => {



    const { name, cpf, birthDate } = req.body
    const idade: boolean = validaIdade(birthDate)

    try {

        if (!name || !cpf || !birthDate) throw new Error("Body incompleto")

        if (idade) throw new Error("Usuario menor de 18 anos")

        const verifCpf: User | undefined = verificaCpf(cpf)

        if (verifCpf) throw new Error("Cliente já tem cadastro")

        const objetoCliente = {
            name,
            cpf,
            birthDate,
            accountMovement: [],
            balance: 0
        }

        dataClient.push(objetoCliente)

        res.send(dataClient).status(201)
    } catch (error: any) {
        res.send(error.message).status(400)
    }

})


// ======================== SALDO ===========================

app.get("/saldoUser/:cpf", (req: Request, res: Response) => {
    const { cpf } = req.params

    try {

        const getCpf: User | undefined = verificaCpf(cpf)

        if (!getCpf) throw new Error("Cliente não encontrado")

        

        res.send({
            saldo: getCpf.balance.toString(),
            accountMovement: getCpf.accountMovement
        }).status(200)

    } catch (error: any) {

        res.send(error.message).status(400)

    }

})



//-----------------------------------------------------------------------------
// ========================= tranferencia interna ==========================
//-----------------------------------------------------------------------------


app.put("/tranferencia/:cpfUserReceive/:nameUserReceive", (req: Request, res: Response) => {

    const { name, cpf, valor, detalhe } = req.body
    const { cpfUserReceive, nameUserReceive } = req.params

    try {

        let indexsend: number = 0
        let indexreceive: number = 0
        let saldoUserSend: number = 0


        // verificações de usuarios 

        const getCpfReceive = dataClient.find((client: User, i: number) => {

            if (client.cpf === cpfUserReceive) indexreceive = i

            return client.cpf === cpfUserReceive;
        })

        if (!getCpfReceive) throw new Error("Cliente não encontrado");

        if (getCpfReceive.name !== nameUserReceive) throw new Error("Nome do CLiente não confere com o do cpf")

        //

        const getCpfsend: User | undefined = dataClient.find((client: User, i: number) => {

            if (client.cpf === cpf) {
                indexsend = i;
                saldoUserSend = client.balance
            }

            return client.cpf === cpf
        })

        if (!getCpfsend) throw new Error("Problemas no User que envia ")
        if ((saldoUserSend - valor) < 0) throw new Error("Saldo insuficiente")

        //dados do usuario que envia

        const date: string = new Date().toLocaleString()

        const objTranferUserSend: Transferencia = {
            name: nameUserReceive,
            cpf: cpfUserReceive,
            value: valor,
            type: TIPO.DEBITO,
            date,
            operation: OPERACAO.TRANSFERSENT,
            description: detalhe
        }

        dataClient[indexsend].accountMovement.push(objTranferUserSend)
        dataClient[indexsend].balance -= valor



        //dados do usurio q vai receber


        const objTranferUserReceiving: Transferencia = {
            name,
            cpf,
            value: valor,
            type: TIPO.CREDITO,
            date,
            operation: OPERACAO.TRANSFERRECEIVED,
            description: detalhe
        }

        dataClient[indexreceive].accountMovement.push(objTranferUserReceiving)
        dataClient[indexreceive].balance += valor

        const comprovante: {} = {
            userSend: {
                name: getCpfsend.name,
                cpf: getCpfsend.cpf
            },
            userReceive: {
                name: getCpfReceive.name,
                cpf: getCpfReceive.cpf
            },
            valor,
            date,
            description: detalhe

        }
        res.send(comprovante).status(200)

    } catch (error: any) {

        res.send(error.message).status(400)

    }

})



//-----------------------------------------------------------------------------
// ================== add saldo ==================
//-----------------------------------------------------------------------------


app.put("/adicionarsaldo/user/:nameuser/:cpfuser", (req: Request, res: Response) => {
    const { nameuser, cpfuser } = req.params
    const { valor, detalhe } = req.body

    try {

        if (!nameuser || !cpfuser) throw new Error("nome e cpf obrigatorio")
        if (!valor) throw new Error(" valor do deposito obrigatorio ",)

        let index: number = 0

        const objetoCliente: User | undefined = dataClient.find((client: User, i: number) => {
            if (client.cpf === cpfuser) index = i
            return client.cpf === cpfuser
        })


        if (!objetoCliente) throw new Error("Usuario não encontrado")

        let date: string = new Date().toLocaleString()

        const objDeposito: Deposito = {
            value: valor,
            date,
            type: TIPO.CREDITO,
            operation: OPERACAO.DEPOSIT
        }

        dataClient[index].accountMovement.push(objDeposito)
        dataClient[index].balance += Number(valor)

        const comprovante: {} = {
            name: objetoCliente.name,
            cpf: objetoCliente.cpf,
            valor,
            date,
        }

        res.send(comprovante).status(200)



    } catch (error: any) {
        res.send(error.message).status(400)
    }

})

// ================= PAGEMENTO DE CONTAS ==================

app.put("/user/:cpfuser/pay", (req: Request, res: Response) => {
    let { description, valor, date } = req.body
    const { cpfuser } = req.params

    try {

        let saldo = 0

        if (cpfuser === ":cpfuser" || !cpfuser) throw new Error("Passe o cpf no parametro")

        if (!description || !valor) throw new Error("Passe descrição e valor no body")

        let index: number = 0

        const userCpf = dataClient.find((user: User, i: number) => {
            if (user.cpf === cpfuser) {
                index = i
                saldo = user.balance
            }
            return user.cpf === cpfuser
        })

        if (!userCpf) throw new Error("Usuario não encontrado")
        if ((saldo - valor) < 0) throw new Error("Saldo insuficiente")
        if (!date) {
            date = new Date().toLocaleDateString()
        }

        const newPay: Pay = {
            description,
            value: valor,
            date,
            type: TIPO.DEBITO,
            operation: OPERACAO.PAY
        }


        dataClient[index].accountMovement.push(newPay)
        if (date == new Date().toLocaleDateString()) {
            dataClient[index].balance -= valor
        }

        const comprovante: {} = {
            name: userCpf.name,
            cpf: userCpf.cpf,
            description,
            valor,
            date,
        }

        res.send(comprovante).status(200)

    } catch (error: any) {
        res.send(error.message).status(400)
    }
})



//=========================== LISTEN =======================
app.listen(3003, () => {
    console.log("rodando na porta 3003")
})
