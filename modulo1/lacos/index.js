// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Exercícios de interpretação de código
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
/* 1-QUESTÃO 
    O codigo está executando um laço de repetição, do tipo 'for'. O valor exibido será: 10

*/

/* 2-QUESTÃO
    A-
       [19, 21, 23, 25, 27, 30] 
    B-
       Seria melhor usar o 'for', na outra forma (let i; i<lista.length; i++){
           lista[i]
       }  

*/

/* 3-QUESTÃO
    "*" 
    "**" 
    "***" 
    "****" 

*/

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Exercícios de escrita de código
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// 1-QUESTÃO

let quantPets = Number(prompt("Olá! Quantos bichinhos de estimação você tem?"))

if(quantPets > 0){
    let i = 0
    let bichinhos = []
    while(i<quantPets){
        bichinhos.push(prompt(`Digite o nome do ${i+1}º Bichinho:`))
        i++
    }
    console.log(`Seus Bichinhos: ${bichinhos}`)
    alert(`Seus Bichinhos: ${bichinhos}`)
}else{
   console.log("Que pena! Você pode adotar um pet!") 
}

console.log("--------------------")
console.log("2-QUESTÃO")

// 2-QUESTÃO

//A--

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let imprimeArray = (array) =>{
    console.log("a--")
    for(let i of array){
        console.log(i)
    }
}

//B

let dividePor10 = (array) =>{
    console.log("b--")
    for(let i of array){
        console.log(i/10)
    }
}

//C

let numerospares = (array) =>{
    console.log("c--")
    let newArray = []
    for(let i of array){
        if(i%2 === 0){
            newArray.push(i)
        }
    }
    return console.log(newArray)
}

//D

let valorDaString = (array) =>{
    console.log("d--")
    let i = 0
    while(i < array.length){
        console.log(`O elemento do índex ${i} é: ${array[i]}`)
        i++
    }
}

//E

let maiorMenor = (array) =>{
    console.log("e--")
    let maior = 0
    let menor = array[1]
    for(let i of array){
        if(i > maior){
            maior = i
        }
    }

    for(let i of array){
        if(i < menor){
            menor = i
        }
    }
    console.log(`O maior numero do array é: ${maior} e o menor é ${menor}`)
    
}

imprimeArray(array)
dividePor10(array)
numerospares(array)
valorDaString(array)
maiorMenor(array)




