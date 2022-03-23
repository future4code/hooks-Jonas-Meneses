// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let newArray = []
  for(let i = (array.length-1);i>=0;i--){
      newArray.push(array[i])
  }
  return newArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a, b) {
    return a - b;
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter(item =>{
      return item%2 === 0
  })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter(item =>{
        return item%2 === 0
    }).map(item =>{ return item*item})
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for(let i of array){
      if(i>maiorNumero){
          maiorNumero = i
      }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
    let idMaiorNumero = (n1,n2) =>{
        let maiorNumero
        let menorNumero
        if(num1 > num2){ 
            maiorNumero = n1
            menorNumero = n2
        }else{
            maiorNumero = n2
            menorNumero = n1
        }
        return {maior: maiorNumero, menor: menorNumero} 
    }
    let objectNumbers = idMaiorNumero(num1, num2)
    let higherNumber = objectNumbers.maior
    let smallestNumber = objectNumbers.menor
    let maiorDivisivelPorMenorVar = higherNumber % smallestNumber === 0
    let diferencaVar = higherNumber - smallestNumber

    return { 
        maiorNumero:higherNumber, maiorDivisivelPorMenor: maiorDivisivelPorMenorVar, diferenca:diferencaVar}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let number = 0
   let newArray = []
    for(let i = 0; i<n; i++){
        newArray.push(number)
        number += 2
   }

   return newArray
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    // Se um triângulo possuir os três lados iguais, ele é chamado de "Equilátero". 
    // Se possuir apenas dois lados iguais, diz-se que ele é "Isósceles"
    // Se os três lados tiverem medidas diferentes, ele é "Escaleno".
    let triangulo = ""
    if(ladoA === ladoB && ladoB ===ladoC){
        triangulo = "Equilátero"
    }else if(ladoA === ladoB || ladoB ===ladoC || ladoA === ladoC){
        triangulo = "Isósceles"
    }else{
        triangulo = "Escaleno"
    }
    return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let newArray = array.sort(function(a, b) {
        return a - b;
      })
    let arrayFinal = []
    arrayFinal.push(newArray[newArray.length - 2])
    arrayFinal.push(newArray[1])
    return arrayFinal
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return(`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`)
    
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let newOjbject = {
        ...pessoa,
        "nome": "ANÔNIMO"
       
    }

   return newOjbject
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    return pessoas.filter(item =>{
        return item.idade > 14 && item.idade <60 && item.altura >= 1.5
    })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    
    return pessoas.filter(item =>{
        return (item.idade <= 14 || item.idade > 60) || item.altura < 1.5
   })

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    for(let i = 0; i<contas.length; i++){

        let totalCompras = 0

        for(let e of contas[i].compras){
            totalCompras += e
        }

        let novoSaldo = contas[i].saldoTotal - totalCompras
        
        contas[i] = {...contas[i], "saldoTotal":novoSaldo,"compras":[]}
    }
    console.log(contas)
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort(function(a, b) {
    if(a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  })
  return consultas
  //fonte de pesquisa https://www.horadecodar.com.br/2021/01/11/como-ordenar-um-array-de-objetos-em-javascript/
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

    return consultas.sort(function(a,b){
        new Date (a.dataDaConsulta).valueOf() - new Date (b.dataDaConsulta).valueOf
    })
   
    // o mais proximo q eu achei -> https://www.youtube.com/watch?v=AmQ1OX7XBJw

}