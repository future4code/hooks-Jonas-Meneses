import { type } from "os"

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type result = {
    nome: string,
    anoLancamento: number,
    genero: any
}

type Pontuacao = {
    nome: string,
    anoLancamento: number,
    genero: any
    pontuacao: number
}

let result3: result | Pontuacao = {
    nome: process.argv[2],
    anoLancamento: Number(process.argv[3]),
    genero: process.argv[4]
    
}

const pontuacao =  Number(process.argv[5])

pontuacao &&( result3 = {...result3, pontuacao:pontuacao })

console.log(result3)




