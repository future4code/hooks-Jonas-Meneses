export enum    TIPO {
    DEBITO = "debito", // para movimentações q 
    CREDITO = "credito"

}

export enum OPERACAO {
    TRANSFERSENT =  "Transferencia enviada",
    TRANSFERRECEIVED = "Transferncia recebida",
    DEPOSIT = "Deposito de saldo",
    PAY = "pagamento de conta"
}

export type Transferencia = {
    name: string,
    cpf: string,
    value: number,
    type: TIPO,
    date: string,
    operation:OPERACAO,
    description: string
}

export  type Deposito = {
    date: string,
    value: number
    type: TIPO,
    operation: OPERACAO
}

export type Pay = {
    description: string
    value: number
    date: string
    type: TIPO
    operation: OPERACAO

}

export type User = {
    name: string;
    cpf: string
    birthDate: string
    accountMovement: Deposito[] & Transferencia[] & Pay [],
    balance: number
}



export let dataClient: User[] = [
    {
        "name": "Astrodev",
        "cpf": "12345678996",
        "birthDate": "04/08/2000",
        "accountMovement": [],
        "balance": 0
    },
    {
        "name": "Jonas",
        "cpf": "12345678986",
        "birthDate": "04/08/2000",
        "accountMovement": [],
        "balance": 0
    }
    
]