const quest = (num) => console.log(`***** ${num} *****`) // só pra organizar o console

const alternat = (a) => console.log(`${a}--`)


//---------------------------------
// Exercícios de interpretação de código
//---------------------------------

// **** 1 Questão ****  
    /*
    a-
        console.log(filme.elenco[0]) = "Matheus Nachtergaele"

        console.log(filme.elenco[filme.elenco.length - 1]) = "Virginia Cavendish"

        console.log(filme.transmissoesHoje[2]) = Globo, 14h
    */

// **** 2 Questão ****  
    /*
    a-
        console.log(cachorro) = nome: Juca, idade: 3, raca: SRD

        console.log(gato) = nome: Juba, idade: 3, raca: SRD

        const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")} = nome: Jubo, idade: 3, raca: SRD
    b-
        todas as informaçõe do objeto são adicionados no novo objeto.

    */

// **** 2 Questão ****  
    /*
    a-
        console.log(minhaFuncao(pessoa, "backender")) = false

        console.log(minhaFuncao(pessoa, "altura")) = 
        acho q vai dar Undefined ou erro, pois não tem nenhuma propriedade altura no objeto pessoa.

    b-
        acho q vai dar Undefined ou erro, pois não tem nenhuma propriedade altura no objeto pessoa.
    */

//---------------------------------
// Exercícios de escrita de código
//---------------------------------
// ***** 1 questão *****
quest(1) // fiz essa função para organizar o console
    //a- 
    alternat("a") // essa tbm!
        const pessoa = {
            nome: "Jonas",
            apelido: ["fariseu", "Joninha", "Juanas"]
        }

        const imprime = (obj) =>{
            console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelido[0]}, ${obj.apelido[1]} ou ${obj.apelido[2]}`)
        }
        imprime(pessoa)
    //b- 
    alternat("b")
        const novoObj = {
            ...pessoa,
            apelido:["Cabeça", "Barrigudo", "fofinho"]
        }
        imprime(novoObj)


// ***** 2 questão *****
quest(2)
  
    const pessoa1Q2 = {
        nome: "Francisco",
        idade: "25",
        profissao: "engenheiro"
    } 
    
    const pessoa2Q2 = {
        nome: "Antonio",
        idade: "30",
        profissao: "Gerente"
    }
    const recebeObj = (obj)=>{
        const array = []
        array.push(obj.nome)
        array.push(obj.nome.length)
        array.push(obj.idade)
        array.push(obj.profissao)
        array.push(obj.profissao.length)
        console.log(array)
    } 
    recebeObj(pessoa1Q2)
    recebeObj(pessoa2Q2)


// ***** 3 questão *****
quest(3)
    //a-
    alternat("a--")
        const carrinho = []
    
    //b-
    alternat("b--")
        const fruta1 = {
            nome: "banana",
            disponibilidade: true
        }
        const fruta2 = {
            nome: "abacate",
            disponibilidade: true
        }
        const fruta3 = {
            nome: "melancia",
            disponibilidade: true
        }
    
    //c-
    alternat("c--")
        const addCarrinho = (obj) => carrinho.push(obj)
        addCarrinho(fruta1)
        addCarrinho(fruta2)
        addCarrinho(fruta3)
    
    //d-
    alternat("d--")
    console.log(carrinho)

console.log("***** DESAFIO *****")
//---------------------------------
// Exercícios de escrita de código
//---------------------------------
// ***** 1 questão *****
quest(1)
    const input = ()=>{
        const pessoa = {
            nome: prompt("Qual seu nome:"),
            idade: Number(prompt("Qual sua idade")),
            profissao: prompt("Qual sua Profissão")}
        console.log(pessoa)
        console.log(typeof pessoa)
    }
    input()
        
// ***** 2 questão *****
quest(2)
    const filme1 = {
        anoLancamento: 1999,
        nome: "Lagoa Azul"
    }
    const filme2 = {
        anoLancamento: 2001,
        nome: "As Tranças do Rei careca"
    }

    const filmes = (obj1, obj2) =>{
        console.log(`O primeiro filme foi lançado antes do segundo? ${obj1 > obj2}`)
        console.log(`foi lançado no mesmo ano do segundo? ${obj1 == obj2}`)
    }

    console.log(filme1)
    console.log(filme2)

    filmes(filme1, filme2)

// ***** 3 questão *****
quest(3)

