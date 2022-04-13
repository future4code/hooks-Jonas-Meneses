//-------------------------------------------
// Exercícios de interpretação de código
//-------------------------------------------

// 1- 
  /* 
        a - undefined
        b - null
        c - 9
        d - 3
        e - [3, 19, 5, 6, 7, 8, 9, 10, 11]
        f -  9

    2-
        Subi num ônibus em Marrocos
        console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

        "SUBI NUM ONIBUS EM MARROCOS" , 
        Subi num ônibus em MIrrocos, 21

  */ 
 
//-------------------------------------------
// Exercícios de escrita de código
//-------------------------------------------

// 1 -
    let nome = prompt("Qual seu nome:")
    let email = prompt("Digite seu email")

    console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)

//2-
    let comidas = ["pipoca", "bata frita", "carne assada", "pizza", "sushi"]

    console.log(comidas)
    console.log(`Essas são minhas comidas preferidas:` )
    console.log(comidas[0])
    console.log(comidas[1])
    console.log(comidas[2])
    console.log(comidas[3])
    console.log(comidas[4])

    comidas[1] = prompt("Digite sua comida preferida: ")
    console.log(comidas)

// 3- 
    // a-
    let listaDeTarefas = []
    // b-
    listaDeTarefas.push(prompt(" Digite uma tarefa que vc precisa realizar no dia "))
    listaDeTarefas.push(prompt(" Digite uma tarefa que vc precisa realizar no dia "))
    listaDeTarefas.push(prompt(" Digite uma tarefa que vc precisa realizar no dia "))
    // c-
    console.log(listaDeTarefas)
    // d-
    let indice = Number(prompt("digite o índice de uma tarefa que vc já realizou: 0, 1 ou 2 "))
    // e-
    listaDeTarefas.splice(indice, 1)
    console.log(listaDeTarefas)

//-------------------------------------------
//Desfio
//-------------------------------------------
//1-
    let frase = prompt("digite")
    let array = frase.split(" ")
    console.log(array)
//2 - 
    let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
    console.log(`a palavra abacaxi está na posição ${frutas.indexOf("Abacaxi")}, o arrey tem ${frutas.length} itens`)