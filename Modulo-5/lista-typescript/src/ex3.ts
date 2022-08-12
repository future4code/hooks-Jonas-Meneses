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
    genero: GENERO
}

type Pontuacao = {
    nome: string,
    anoLancamento: number,
    genero: GENERO
    pontuacao: number
}

let result3: result | Pontuacao = {
    nome: process.argv[2],
    anoLancamento: Number(process.argv[3]),
    genero: GENERO.ACAO
    
}

const pontuacao =  Number(process.argv[5])

pontuacao &&( result3 = {...result3, pontuacao:pontuacao })

console.log(result3)




