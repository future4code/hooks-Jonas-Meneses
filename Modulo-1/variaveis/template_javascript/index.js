// Exercícios de interpretação de código

// 1. Analise o programa abaixo e diga o que será impresso no console.
/*
let a = 10
let b = 10

console.log(b) o Valor impresso será 10
b = 5
console.log(a, b) o valor impresso será (10, 5)
*/ 

// 2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
/*
let a = 10
let b = 20
c = a
b = c
a = b
a Variavel c não foi declarada, eu acho que esse codigo iria dar erro. Mas vamos supor que a variavel c seja um let.

c= 10
b= 10
a= 10

console.log(a, b, c) o avlor impresso será (10, 10, 10)
*/

// 3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.
/*
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${ValorDiario/HorasTrabalhadasPorDia} por hora`)

Variavel p chamaria de 'HorasTrabalhadasPorDia'
Variavel t chamaria de 'ValorDiario'
*/

//---------------------------------------------------
// Exercícios de escrita de código
//---------------------------------------------------
alert("QUESTÃO 1")
// Questão 1

//a
let nome

//b
let idade

//c
console.log(typeof(nome, idade))

//d
/* resultado foi undefined, pois qdo declarei a variavel não foi atribuido nenhum valor, tornando as variaveis indefinidas
*/

//e
nome = prompt('Qual seu nome:')
idade = prompt('qual sua idade')

//f
console.log(typeof(nome, idade))
/*
O resultado foi string, foram atribuidos valores as variaveis atraves do prompt. 
*/


//g
console.log("Olá", nome, "você tem", idade, "anos")


// Questão 2
alert("QUESTÃO 2")
//a
let corDaBlusa = prompt("Você está usando uma roupa azul hoje?")
let usaOculos = prompt("Voce usa Oculos?")
let almoco = prompt("Voce almoçou Hoje?")

//b
console.log("Você está usando uma roupa azul hoje? -", corDaBlusa)
console.log("Voce usa Oculos?", usaOculos)
console.log("Voce almoçou Hoje?", almoco)


//Questão 3
alert("QUESTÃO 3")
let a = 10
let b = 25
let troca

troca = a
a = b
b = troca

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)


//------------------------------------------------
//DESAFIO
//------------------------------------------------
alert("DESAFIO")
let valor1 = Number(prompt("Digite um numero:"))
let valor2 = Number(prompt("Digite outro numero:"))
let soma = valor1 + valor2
let multiplica = valor1 * valor2

console.log("O primeiro valor é", valor1)
console.log("O segunto valor é", valor2)
console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplica)