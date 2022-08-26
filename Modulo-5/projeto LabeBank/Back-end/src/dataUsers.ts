export enum    TIPO {
    DEBITO = "debito", // para movimentações q 
    CREDITO = "credito"

}

export enum OPERACAO {
    TRANSFERSENT =  "Transferencia enviada",
    TRANSFERRECEIVED = "Transferncia recebida",
    DEPOSITO = "Deposito de saldo",
    PAY = "pagamento de conta"
}

export type Transferencia = {
    name: string,
    cpf: string,
    valor: number,
    type: TIPO,
    date: string,
    operacao:OPERACAO,
    detalhe: string
}

export  type Deposito = {
    data: string,
    valor: number
    type: TIPO,
    operacao: OPERACAO
}

export type Pay = {
    description: string
    valor: number
    date: string
    type: TIPO
    operacao: OPERACAO

}

export type User = {
    name: string;
    cpf: string
    birthDate: string
    movimentacoes: Deposito[] & Transferencia[] & Pay [],
    saldo: number
}



export let dataClient: User[] = [
{
    "name": "jonas",
    "cpf": "04359088396",
    "birthDate": "04/08/1991",
    "movimentacoes": [],
    "saldo": 0
}]