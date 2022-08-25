export type Transferencia = {
    name: string,
    cpf: string,
    valor: number
    date: string
}

export type Cadastro = {
    name: string;
    cpf: string
    birthDate: string
    debitos: number[],
    transferencias: any | Transferencia[],
    depositos: Deposito[] | any,
    saldo: number
}


export  type Deposito = {
    data: string,
    valor: number
}

export let dataClient: Cadastro[] = [
{
    "name": "jonas",
    "cpf": "04359088396",
    "birthDate": "04/08/1991",
    "debitos": [],
    "transferencias": [],
    "depositos": [],
    "saldo": 0
}]