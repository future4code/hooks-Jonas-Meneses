import cors from "cors"
import express from "express"

const app = express()
app.use(express.json())
app.use(cors())


type tranferencia = {
    name: string,
    cpf: string,
    valor: number
    date: string
}

type cadastro = {
    name: string;
    cpf: string
    birthDate: string
    debitos: number[],
    transferencias: any | tranferencia[],
    depositos: number[],
    saldo: number
}




let dataClient: any | cadastro[] = [{
    name: "",
    cpf: 0,
    birthDate: "",
    debitos: [],
    transferencias: [],
    depositos: [],
    saldo: 0
},
{
    "name": "jonas",
    "cpf": "04359088396",
    "birthDate": "04/08/1991",
    "debitos": [],
    "transferencias": [],
    "depositos": [],
    "saldo": 0
}]


// ======================= PEGA TODOS USURARIOS

app.get("/alluser", (req, res) => {
    res.send(dataClient)
})

//========================= CRIAR CONTA =======================

app.post("/create/user", (req, res) => {

    const { name, cpf, birthDate } = req.body

    try {

        if (name && cpf && birthDate) {

            const verifCpf = dataClient.find((client: cadastro) => {
                return client.cpf === cpf
            })

            console.log(cpf, verifCpf)

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


            // fim do if
        } else {
            throw new Error("Body incompleto")
        }
        res.send(dataClient)
    } catch (error: any) {
        res.send(error.message)
    }

})


// ======================== SALDO ===========================

app.get("/saldoUser/:cpf", (req, res) => {
    const { cpf } = req.query

    try {

        const getCpf = dataClient.find((client: cadastro) => {
            console.log(client.cpf)
            return client.cpf === cpf

        })

        if (!getCpf) throw new Error("Cliente não encontrado")

        res.send({
            saldo: getCpf.saldo.toString()
        })

    } catch (error: any) {

        res.send(error.message)

    }

})


// ========================= tranferencia ==========================

//{name, cpf, valor, date }

app.put("/tranferencia/:cpfUserReceive/:nameUserReceive", (req, res) => {
    const { name, cpf, valor } = req.body
    const { cpfUserReceive, nameUserReceive } = req.query

    try {

        const getCpf = dataClient.find((client: cadastro) => {
            return client.cpf === cpfUserReceive
        })

        if (!getCpf) throw new Error("Cliente não encontrado")

        if (getCpf.name !== nameUserReceive) throw new Error("Nome do CLiente não confere com o do cpf")

        const objTranfer = {
            name,
            cpf,
            valor,
            date: new Date().toLocaleString()
        }


        dataClient = dataClient.map((client: cadastro) => {
            if (client.cpf === getCpf.cpf) {
                return ({
                    ...client,
                    transferencias: [...client.transferencias, objTranfer]
                }
                )
            } else {
                return client
            }
        })

        res.send(dataClient)

    } catch (error: any) {

        res.send(error.message)

    }


})

//=========================== LISTEN =======================
app.listen(3003, () => {
    console.log("rodando na porta 3003")
})
