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


// ======================= PEGA TODOS USURARIOS

app.get("/alluser", (req: Request, res: Response) => {
    res.send(dataClient)
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
            movimentacoes: [],
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

        const getCpf: User | undefined = verificaCpf(Number(cpf))

        if (!getCpf) throw new Error("Cliente não encontrado")

        res.send({
            saldo: getCpf.saldo.toString()
        })

    } catch (error: any) {

        res.send(error.message)

    }

})


// ========================= tranferencia interna ==========================


app.put("/tranferencia/:cpfUserReceive/:nameUserReceive", (req: Request, res: Response) => {

    const { name, cpf, valor, detalhe } = req.body
    const { cpfUserReceive, nameUserReceive } = req.params

    try {

        let indexsend: number = 0
        let indexreceive: number = 0
        let saldoUserSend: number = 0


// verificações de usuarios 

        const getCpfReceive = dataClient.find((client: User, i: number) => {

            if (client.cpf === cpfUserReceive) indexreceive = i;

            return client.cpf === (cpfUserReceive);
        })

        if (!getCpfReceive) throw new Error("Cliente não encontrado");

        if (getCpfReceive.name !== nameUserReceive) throw new Error("Nome do CLiente não confere com o do cpf")

        //

        const getCpfsend: User | undefined = dataClient.find((client: User, i: number) => {

            if (client.cpf === cpf) {
                indexsend = i;
                saldoUserSend = client.saldo
            }

            return client.cpf === cpf;
        })

        
        if(!getCpfsend) throw new Error("Problemas no User que envia ")
        if((saldoUserSend - valor) < 0) throw new Error("Saldo insuficiente")

        //dados do usuario que envia

        const objTranferUserSend: Transferencia = {
            name: nameUserReceive,
            cpf: cpfUserReceive,
            valor,
            type: TIPO.DEBITO,
            date: new Date().toLocaleString(),
            operacao: OPERACAO.TRANSFERSENT,
            detalhe 
        }
 
        dataClient[indexsend].movimentacoes.push(objTranferUserSend)
        dataClient[indexsend].saldo -= valor

        

        //dados do usurio q vai receber
        

        const objTranferUserReceiving: Transferencia = {
            name,
            cpf,
            valor,
            type: TIPO.CREDITO,
            date: new Date().toLocaleString(),
            operacao: OPERACAO.TRANSFERRECEIVED,
            detalhe 
        }

        dataClient[indexreceive].movimentacoes.push(objTranferUserReceiving)
        dataClient[indexreceive].saldo += valor

        
        res.send(dataClient)

    } catch (error: any) {

        res.send(error.message)

    }

})


// ================== add saldo ==================

app.put("/adicionarsaldo/user/:nameuser/:cpfuser", (req: Request, res: Response) => {
    const { nameuser, cpfuser } = req.params
    const { valor, detalhe } = req.body

    try {

        if (!nameuser || !cpfuser) throw new Error("nome e cpf obrigatorio")
        if (!valor) throw new Error(" valor do deposito obrigatorio ",)

        let index: number = 0

        const objetoCliente: User | undefined = dataClient.find((client: User, i: number) => {
            if (client.cpf === cpfuser) index = i
            return client.cpf = cpfuser
        })

        if (!objetoCliente) throw new Error("Usuario não encontrado")

        const objDeposito: Deposito = {
            valor,
            data: new Date().toLocaleString(),
            type: TIPO.CREDITO,
            operacao: OPERACAO.DEPOSITO
        }

        dataClient[index].movimentacoes.push(objDeposito)
        dataClient[index].saldo += Number(valor)


        res.send(dataClient)



    } catch (error: any) {
        res.send(error.message)
    }

})

// ================= PAGEMENTO DE CONTAS ==================

app.put("/user/:cpfuser/pay", (req, res)=>{
    let {description, valor, date} = req.body
    const {cpfuser} = req.params

    try {

        if(cpfuser === ":cpfuser" || !cpfuser ) throw new Error("Passe o cpf no parametro")

        if(!description || !valor) throw new Error("Passe descrição e valor no body")

        let index: number = 0

        const userCpf = dataClient.find((user: User, i:number)=>{
            if(user.cpf === cpfuser) index = i
            return user.cpf === cpfuser
        })

        if(!userCpf) throw new Error("Usuario não encontrado")
        if(!date) {
            date = new Date().toLocaleDateString()
        }

        const newPay: Pay = {
            description,
            valor,
            date,
            type: TIPO.DEBITO,
            operacao: OPERACAO.PAY
        }

        console.log(new Date().toLocaleDateString(), date)

        dataClient[index].movimentacoes.push(newPay)
        if(date == new Date().toLocaleDateString()){
            dataClient[index].saldo -= valor
        }

        res.send(dataClient)
        
    }catch (error: any) {
        res.send(error.message)
    }
})



//=========================== LISTEN =======================
app.listen(3003, () => {
    console.log("rodando na porta 3003")
})
