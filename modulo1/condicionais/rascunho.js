
const nome = prompt("Qual seu nome completo:")
let tipoDeJogo = prompt("Tipo de jogo:\n IN -> internacional\n DO -> doméstico").toLocaleUpperCase()
console.log(tipoDeJogo)
let etapa = prompt("Qual etapa:\n SF -> Semi-final;\n DT -> Decisão de terceiro lugar;\n FI -> Final;").toLocaleUpperCase()
const categoria = Number(prompt("Qual a categoria:\n 1, 2, 3 ou 4\n *DIGITE O NUMERO* "))
const quantDeIgressos = Number(prompt("Quala quantidade de ingressos?"))

//declaração de variaveis
let ingressos = {
    sf: [1320, 880, 550, 220],
    dt: [660, 440, 330, 170],
    fi: [1980, 1320, 880, 330],
}

let cambio, valorDoIngresso

// condicional de tipo de jogo e ja aprovietei e defini o cambio
switch (tipoDeJogo) {
    case "IN":
        tipoDeJogo = "Internacinal"
        cambio = 4.1
        break;
    
    case "DO":
        tipoDeJogo = "Nacional"
        cambio = 1
    default:
        tipoDeJogo = "Valor invalido"
        break;
}

//condicional  da etapa e já defini o valor do ingresso
switch (etapa) {
    case "SF":
        etapa = "Semifinal"
        valorDoIngresso = ingressos.sf[categoria-1]
        break;
    case "DT":
        etapa = "Decisão Terceiro Lugar"
        valorDoIngresso = ingressos.dt[categoria-1]
    break;
    case "FI":
        etapa = "Final"
        valorDoIngresso = ingressos.fi[categoria-1]
        break;
    default:
        console.log("Valor invalido")
        break;
}

valorTotal = quantDeIgressos*valorDoIngresso*cambio

console.log("---Dados da compra---")
console.log(`Nome do Cliente: ${nome}`)
console.log(`Tipo de jogo: ${tipoDeJogo}`)
console.log(`Etapa do jogo: ${etapa}`)
console.log(`Categoria ${categoria}`)
console.log(`Quantidade de INgressos: ${quantDeIgressos} ingressos`)
console.log("---Valores---")
console.log(`Valor do ingresso: r$ ${valorDoIngresso*cambio}`)
console.log(`Valor Total: ${valorTotal}`)

//no internacional deu um valor diferente do exemplo do notion, mas ta certo, se vc fizer a conversão para dolar e multiplicar pela quantidade da o valor

