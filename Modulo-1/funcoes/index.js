// **************** Funcoes *****************
//--------------------------------------------
// Exercícios de interpretação de código
//--------------------------------------------
/*
    1- 
        a- no primeiro: 10
           no segundo: 50
        
        b- não aconteceria nada no console, pois a função só multiplica o valor passado po 5.
        A função rodaria normal, mas no console não aconteceria nada.  

    2-
        a- A função primeiro transforma toda a string em letras menusculas e verificaria se na string tem a palavra "cenoura" e retornaria um valor Bollean True ou False
        b- i - True
           ii - true
           iii- false
*/

//--------------------------------------------
// Exercícios de escrita de código
//--------------------------------------------

//1-
console.log("***** 2- Questão *****")
//  a- --------------------------------------
console.log("a----")
        function imprime(){
            console.log("Eu sou Jonas, tenho 30 anos, moro em Fortaleza e sou estudante.")
        }  
        imprime()  

//  b----------------------------------------
console.log("b----")
        // let nome = prompt("Qual seu nome:")        
        // let idade = Number(prompt("Qual sua idade"))
        // let cidade = prompt("Qual sua cidade:")
        // let profissao = prompt("qual sua profissão")

        // function imprimeb(nome, idade, cidade, profissao){
        //     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
        // } 
        // imprimeb(nome, idade, cidade, profissao)

//2-
console.log("***** 2- Questão *****")
//  a---------------------------------------------
        console.log("a-----") 
        soma = (a,b)=>{
            return a+b
        }
        console.log(soma(4,5))

//  b----------------------------------------------
        console.log("b----")
        maior = (a,b) => {
            let maior = a>b
            return console.log("O primeiro numero é maior q o segundo?", maior)
        }
        maior(8,7) 

//  c-----------------------------------------------
        console.log("c----")
        par = (num) =>{
            let numero = num % 2 ==0
            return console.log(`O numero ${num} é par? - ${numero}`)
        }
        par(5)

// d------------------------------------------------
        console.log("d----")
        transform = (str) =>{
            return console.log(`a string tem ${str.length} caracteres -- ${str.toUpperCase()}`)
        }   
        transform("meu nome é jonas")   
//--------------------------------------------------

//3
        console.log("***** 3- Questão *****")
        soma3 = (a,b) => a+b

        diferenca = (a,b) => a-b
            
        multiplicacao = (a,b) => a*b

        divide = (a,b) => a/b
        
        let num1 = Number(prompt("Digite um numero:"))
        let num2 = Number(prompt("Digite um numero:"))
        console.log(`Numeros inseridos: ${num1} e ${num2}`)
        console.log(`Soma: ${soma(num1,num2)}`)
        console.log(`Diferença: ${diferenca(num1,num2)}`)
        console.log(`Multiplicação: ${multiplicacao(num1,num2)}`)
        console.log(`Divisão: ${divide(num1,num2)}`)

//--------------------------------------------
// Exercícios de escrita de código
//--------------------------------------------
console.log("***** DESAFIO *****")
//1-
console.log("***** 1 QUESTÃO *****")
//  a-
console.log("a----")
        imprimeDesafio = (str) => console.log(str)
        imprimeDesafio("Desafio")

//  b-
console.log("b----")
        somaDesafio = (a,b) => a+b
        imprimeDesafio(somaDesafio(5,8)) 

//2-
console.log("***** 2 QUESTÃO *****")
        let hip = (a,b) =>{
            let hip = Math.sqrt(a*a+b*b)
            console.log(hip)
        }
        hip(3,5)
        