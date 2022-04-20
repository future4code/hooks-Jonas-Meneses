//funcoes para organizar o console.
const quest = (num) => console.log(`***** ${num} Questão *****`)
const alternativa = (str) => console.log(`${str}--`)


//-------------------------------------------
// Exercícios de interpretação de código
//-------------------------------------------
// ***** 1 Questão *****
/*
    a--
        O codigo pega o numero passado peso User e usa operador resto (%) para ver se da zero
       
        O codigo testa se o numero é par, se for par imprime: "Passou no teste." , se não for par imprime:  "Não passou no teste."
    -------------------------------------------------
    b--
        Para os numeros que dividido por 2 dê resto zero, ou seja, numeros pares.
    -------------------------------------------------
    c--
        Para os numeros que dividido por 2 dê resto diferente de 0, ou seja, numeros impares.
*/

// ***** 2 questão *****
/*
    a-- 
        O codigo serve para mostar das frutas, o Usuario digita uma fruta e ele retorna com o valor da mesma
    -------------------------------------------------
    b--
        O preço da fruta Maçã é R$ 2.25
    -------------------------------------------------
    c--
        O preço da fruta Pêra é R$ 5.5
        O preço da fruta Maçã é R$ 5
    -------------------------------------------------
*/

// ***** 3 Questão *****
/*
    a--
        O codigo recebe um numero passado pelo Usuaio, em seguida vai para a condicional, se for maior q 0, entra na consicional e im prime uma mensagem no console.
    -------------------------------------------------
    b--
        Se o usuario digitar 10, vau imprimir a mensagem: Esse número passou no teste

        Se o usuario imprimir -10, não vai acontecer nada, pois não foi colocado nenhum else no codigo.
    -------------------------------------------------
    c-- 
        Não haverá nenhum erro, não nenhum erro de sintaxe. A ausência do else não da nenhum erro
*/

//-------------------------------------------
// Exercícios de interpretação de código
//-------------------------------------------
// ***** 1 Questão *****
 quest(1)

    const idade = Number(prompt(" *Questão 1* Digite sua idade:"))

    if (idade<18){
        console.log("Você não pode dirigir.")
    }else{
        console.log("Você pode dirigir.")
    }
//-------------------------------------------------

// ***** 2 Questão *****
quest(2)
    const turno = prompt("* Q2 * Qual seu Turno. Digite: M para Manhã - V para Vespertino - N para Noturno")
    
    if(turno.toUpperCase() === "M" ){
        console.log("Bom dia!")
    }else if(turno.toUpperCase() === "V"){
        console.log("Boa tarde!")
    }else if(turno.toUpperCase() === "N"){
        console.log("Boa noite!")
    }else{
        console.log("Digite uma Opção Valida! -> M - V - N")
    }

//-------------------------------------------------

// ***** 3 Questão *****
quest(3)
    const turnoQ3 = prompt("* Q3 * Qual seu Turno. Digite: M para Manhã - V para Vespertino - N para Noturno")
    
    switch (turnoQ3.toLocaleUpperCase()) {
        case "M":
            console.log("Bom dia!")
            break;
    
        case "V":
            console.log("Boa tarde!")
            break;
    
        case "N":
            console.log("Boa noite")
        default:
            console.log("Digite uma Opção Valida! -> M - V - N")
            break;
    }
    
//-------------------------------------------------

// ***** 4 Questão *****
quest(4)

    let genero = prompt("Qual o gênero de filme que vão assistir ")
    let valorDoIngresso = Number(prompt("Qual o valor do ingresso"))
    
    let condicionalQ4 = genero.toLocaleLowerCase() === "fantasia" && valorDoIngresso < 15 // *pensei em colocar <=15, mas no anunciado está abaixo de 15

    switch (condicionalQ4) {
        case true:
            console.log("Bom filme!")
            break;
    
        default:
            console.log("Escolha outro filme :(")
            break;
    }

//-----------------------------------------------
//           ***** DESAFIO *****
//-----------------------------------------------
console.log("----- DEFSAFIO -----")

// ***** 1 QUESTÃO *****
quest(1)
    genero = prompt("Qual o gênero de filme que vão assistir ")
    valorDoIngresso = Number(prompt("Qual o valor do ingresso"))

    condicionalQ4 = genero.toLocaleLowerCase() === "fantasia" && valorDoIngresso < 15 // *pensei em colocar <=15, mas no anunciado está abaixo de 15

    switch (condicionalQ4) {
        case true:
            const lanche = prompt("qual lanchinho você vai comprar?")
            console.log(`Bom filme! e aproveite o seu/sua ${lanche}`)
            break;

        default:
            console.log("Escolha outro filme :(")
            break;
    }

// ***** 2 QUESTÃO *****
quest(2)
 
    const nome = prompt("Qual seu nome completo:")
    
    let tipoDeJogo = prompt("Tipo de jogo:\n IN -> internacional\n DO -> doméstico").toUpperCase()
    
    let etapa = prompt("Qual etapa:\n SF -> Semi-final;\n DT -> Decisão de terceiro lugar;\n FI -> Final;").toUpperCase()
    
    const categoria = Number(prompt("Qual a categoria:\n 1, 2, 3 ou 4\n *DIGITE O NUMERO* "))
    
    const quantDeIgressos = Number(prompt("Quala quantidade de ingressos?"))
    
    //criei uma um objeto contendo arrays dos valores do array
    let ingressos = {
        sf: [1320, 880, 550, 220],
        dt: [660, 440, 330, 170],
        fi: [1980, 1320, 880, 330],
    }

    let cambio, valorDoIngressoDesafio
    let erro = ""
    
    if(categoria>4 || categoria<1){
        erro = "voce digitou uma categoria errada"
    }

    // condicional de tipo de jogo e ja aprovietei e defini o cambio
    switch (tipoDeJogo) {
        case "IN":
            tipoDeJogo = "Internacinal"
            cambio = 4.1
            break;
        
        case "DO":
            tipoDeJogo = "Nacional"
            cambio = 1
            break;
        default:
    
            erro = `Voce digitou opçao tipo de jogo errada, repita o processo ${tipoDeJogo}`
            cambio = 0
            break;
    }
    
    //condicional  da etapa e já defini o valor do ingresso
    switch (etapa) {
        case "SF":
            etapa = "Semifinal"
            valorDoIngressoDesafio = ingressos.sf[categoria-1]
            break;
        case "DT":
            etapa = "Decisão Terceiro Lugar"
            valorDoIngressoDesafio = ingressos.dt[categoria-1]
        break;
        case "FI":
            etapa = "Final"
            valorDoIngressoDesafio = ingressos.fi[categoria-1]
            break;
        default:
            console.log("Valor invalido")
            valorDoIngressoDesafio = 0
            erro = `Voce digitou opçao etapa errada, repita o processo ${etapa}`
            break;
    }
    
    let valorTotal = (quantDeIgressos*valorDoIngressoDesafio)/cambio
    
    console.log("---Dados da compra---")
    console.log(`Nome do Cliente: ${nome}`)
    console.log(`Tipo de jogo: ${tipoDeJogo}`)
    console.log(`Etapa do jogo: ${etapa}`)
    console.log(`Categoria ${categoria}`)
    console.log(`Quantidade de INgressos: ${quantDeIgressos} ingressos`)
    console.log("---Valores---")
    console.log(`Valor do ingresso: r$ ${valorDoIngressoDesafio/cambio}`)
    console.log(`Valor Total: ${valorTotal}`, erro)    
    //no enunciado ele pede pra multiplicar, mas acho q é dividir. No exemplo 2 o resultado ta como dividido. Mas se for multiplicar mesmo é só alterar o operado para multiplicar(na linha 211 e 220).
    
