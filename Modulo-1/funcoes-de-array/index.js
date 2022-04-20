//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=
// interpretação de código
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=
/*
1-
    a) O que vai ser impresso no console?
       vai gerar um novo array com o nome, apelido, indice e o array

2-
    a) O que vai ser impresso no console?
        vai gerar um novo array com os nomes do array usuarios

3-
    a) O que vai ser impresso no console?
        vai gerar um novo array com os apelidos dierentes de "chijo"


*/

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=
// Exercícios de escrita de código
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=

//1-QUESTÃO

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a) Crie um novo array que contenha apenas o nome dos doguinhos

 const newArrayNomes = pets.map(nomes =>{
    return nomes.nome
 })

 console.log(newArrayNomes)

 //b) Crie um novo array apenas com os cachorros salsicha

 const newArraySalsicha = pets.filter(nomes =>{
    return nomes.raca === "Salsicha"
 })

 console.log(newArraySalsicha)

 // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

 const imprimeMensagem = (test)=>{
     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${test}`)
 }
 const newArrayDesconto  = pets.filter(nome =>{
    return nome.raca === "Poodle"
 }).map(nome =>{
     return imprimeMensagem(nome.nome)
 })

//2-QUESTÃO

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

 //a) Crie um novo array que contenha apenas o nome de cada item

const nomesAlimentos = produtos.map(item =>{
    return console.log(item.nome)
})

 //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const nomePreco = produtos.map(item =>{
    return {nome: item.nome, preco: item.preco}
})
console.log(nomePreco)

 //c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

 const limpeza = produtos.filter(item =>{
     return item.categoria === "Limpeza"
    })

 console.log(limpeza)

 //d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

 const ype = produtos.filter(item =>{
     return item.nome.includes("Ypê")
 })

 console.log(ype)

 //e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const arrayNome = ype.map(item =>{
    return `Compre ${item.nome} por ${item.preco}`
})

console.log(arrayNome)


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=
// Exercícios de escrita de código
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=

// 1- Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 // a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

 let pokemon = pokemons.map(item =>{
     return item.nome
 })

 console.log(pokemon.sort())

 //b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

 let tipos =""
 let repetido = pokemons.map((nome, i)=>{ 
    if(tipos.includes(nome.tipo) === false){
        tipos += nome.tipo
        return nome
    }
 }).filter(nome =>{
    return nome
})
