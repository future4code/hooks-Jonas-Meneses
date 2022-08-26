import { dataClient } from "../dataUsers"
import { User } from "../dataUsers"


export const validaIdade = (data: string): boolean =>{
    const arrayData: string[] = data.split("/")

    const year = Number(arrayData[arrayData.length - 1])
    const yearNow = new Date().getFullYear()

    if(yearNow - year < 18 ){
        return true
    }else{
        return false
    }
    
}

export const verificaCpf = (cpf : number) : User | undefined =>{
    
    const verifCpf: User | undefined = dataClient.find((client) => {
        return Number(client.cpf) === cpf
    })

    return verifCpf
}
